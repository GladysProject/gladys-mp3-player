const shared = require('../shared.js');
const path = require('path');

module.exports = function play(params){
    if(shared.player === null) {
        return Promise.reject(new Error(`NO_PLAYER_DEFINED`));
    }

    var list = [];
    shared.player.list.forEach(function(song){
        var infos = path.parse(song);
        list.push({
            title: infos.name
        });
    });

    return Promise.resolve(list);
};