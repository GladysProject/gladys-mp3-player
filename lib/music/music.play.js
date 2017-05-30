const shared = require('../shared.js');
const Promise = require('bluebird');
const Player = require('player');

module.exports = function play(params){
    if(shared.player === null) {
        return Promise.reject(new Error(`NO_PLAYER_DEFINED`));
    }

    if(params.uri) {
        shared.player.add(params.uri);
    } else if(!params.uri && shared.playing == false){
        
        // pick a random playlist
        if(shared.playlists.length > 0){
            var randPlaylist = Math.floor(Math.random() * (shared.playlists.length - 1));
            sails.log.debug(`MP3 Player : Playing playlist ${shared.playlists[randPlaylist].name} !`);
            shared.player = Player(shared.playlists[randPlaylist].songs);
        } else {

            // playing files
            sails.log.debug(`MP3 Player : Playing from files !`);
            shared.player = Player(shared.files);
        }
    }
    
    if(shared.playing === false){
        shared.player.play();
        shared.playing = true;
    }

    return Promise.resolve();
};