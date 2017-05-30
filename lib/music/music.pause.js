const shared = require('../shared.js');
const Promise = require('bluebird');

module.exports = function play(params){
    if(shared.player === null) {
        return Promise.reject(new Error(`NO_PLAYER_DEFINED`));
    }

    player.pause();
    shared.playing = false;
    return Promise.resolve();
};