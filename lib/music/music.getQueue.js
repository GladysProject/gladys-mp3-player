const shared = require('../shared.js');
const taglib = require('taglib');

module.exports = function play(params){
    if(shared.player === null) {
        return Promise.reject(new Error(`NO_PLAYER_DEFINED`));
    }

    var list = shared.player.list;

    return Promise.resolve();
};

// asynchronous API
taglib.tag(path, function(err, tag) {
    tag.artist; // => "Queen"
    tag.title = "Erm";
    tag.saveSync();
});