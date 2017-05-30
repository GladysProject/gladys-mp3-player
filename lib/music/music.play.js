const shared = require('../shared.js');
const Promise = require('bluebird');

module.exports = function play(params){
    if(shared.player === null) {
        return Promise.reject(new Error(`NO_PLAYER_DEFINED`));
    }

    player.add(params.uri);
    player.play();
    shared.playing = true;
    return Promise.resolve();
};