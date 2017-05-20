'use strict';
const Path = require('path');
module.exports = (server) => {
    server.register(require('inert'), () => {
        require('../../routes/assets')(server);
    });
}