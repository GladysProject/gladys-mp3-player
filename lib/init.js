const shared = require('./shared.js');
const fs = require('fs');
const scanFolder = require('./scanFolder');
const Player = require('player');

module.exports = function init(){

    return gladys.param.getValue('GLADYS_MP3_FOLDER')
        .then((folder) => {
            shared.folder = folder;

            shared.player = new Player();

            return scanFolder();  
        });
};