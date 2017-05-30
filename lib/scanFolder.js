const recursive = require('recursive-readdir');
const path = require('path');
const shared = require('./shared.js');

function ignoreFunc(file, stats) {
  return (path.extname(file) !== '.mp3' && path.extname(file) !== '.json');
}

module.exports = function scanFolder(){
    if(shared.folder === null) {
        sails.log.warn(`MP3 Player : MP3 folder not defined. Did you forgot to set GLADYS_MP3_FOLDER ?`);
        return Promise.reject(new Error('MP3_FOLDER_NOT_DEFINED'));
    }

    sails.log.debug(`Gladys : MP3 Player : Starting folder scan. Scanning folder "${shared.folder}".`);

    // read recursively all files
    return recursive(shared.folder, [ignoreFunc])
        .then((elements) => {
            var files = [];
            var playlists = [];

            for(var i = 0; i < elements.length; i++){
                if(path.extname(elements[i]) === '.mp3') {
                    files.push(path.join(shared.folder, elements[i]));
                } else {

                    // read the playlist
                    playlists.push(require(elements[i]));
                    playlists[playlists.length - 1].songs.forEach(function(song, index){
                        playlists[playlists.length - 1].songs[index] = path.join(shared.folder, song);
                    });
                }
            }

            shared.files = files;
            shared.playlists = playlists;
            sails.log.debug(`Gladys : MP3 Player : Finished scanning, found ${shared.files.length} musics, and ${shared.playlists.length} playlists.`);
        });
};