module.exports = function (sails) {

    var init = require('./lib/init.js');
    var music = require('./lib/music/index.js');

    gladys.on('ready', function(){
        init();
    });
      
    return {
        init,
        music
    };
};