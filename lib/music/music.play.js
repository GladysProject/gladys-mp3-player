const shared = require('../shared.js');
const Promise = require('bluebird');

module.exports = function play(params){
    if(shared.player === null) {
        return Promise.reject(new Error(`NO_PLAYER_DEFINED`));
    }

    if(params.uri) {
        shared.player.add(params.uri);
    }
    
    if(shared.playing === false){
        shared.player.play();
        shared.playing = true;
    }
    return Promise.resolve();
};