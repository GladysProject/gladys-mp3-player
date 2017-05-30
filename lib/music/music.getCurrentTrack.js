const shared = require('../shared.js');
const path = require('path');

module.exports = function play(params){
    if(shared.player === null) {
        return Promise.reject(new Error(`NO_PLAYER_DEFINED`));
    }

    var currentTrack = {};
    if(shared.player.list && shared.player.list.length > 0){
        currentTrack.title = path.parse(shared.player.list[0]).name;
    }

    return Promise.resolve(currentTrack);
};