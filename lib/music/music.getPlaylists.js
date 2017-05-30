const shared = require('../shared.js');
const Promise = require('bluebird');

module.exports = function play(params){
    if(shared.player === null) {
        return Promise.reject(new Error(`NO_PLAYER_DEFINED`));
    }   

    var playlists = [];

    shared.playlists.forEach(function(playlist){
        playlists.push({
            title: playlist.title
        });
    })

    return Promise.resolve(playlists);
};