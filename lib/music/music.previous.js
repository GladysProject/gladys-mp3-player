const shared = require('../shared.js');
const Promise = require('bluebird');

module.exports = function previous(params){
    if(shared.player === null) {
        return Promise.reject(new Error(`NO_PLAYER_DEFINED`));
    }

    shared.player.previous();

    return Promise.resolve();
};