const shared = require('../shared.js');
const Promise = require('bluebird');

module.exports = function play(params){
    if(shared.player === null) {
        return Promise.reject(new Error(`NO_PLAYER_DEFINED`));
    }   

    var playlists = [];

    shared.playlists.forEach(function(playlist, index){
        playlists.push({
            title: playlist.title,
            uri: `playlist:${index}`
        });
    })

    return Promise.resolve(playlists);
};