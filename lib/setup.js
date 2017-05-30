const Promise = require('bluebird');
const init = require('./init.js');

module.exports = function setup(){
    
    var newDevice = {
        device: {
            name: `Raspberry Pi Music Player`,
            protocol: ``,
            service: `mp3-player`,
            identifier: ``
        },
        types: [{
            name: 'Music',
            type: 'music',
            identifier: 'music',
            sensor: false,
            min: 0,
            max: 0
        }]
    };

    return gladys.device.create(newDevice)
            .then(() => init());
};