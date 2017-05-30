const shared = require('../shared.js');

module.exports = function play(params){
    if(shared.player === null) {
        return Promise.reject(new Error(`NO_PLAYER_DEFINED`));
    }

    return Promise.resolve({playing: shared.playing});
};