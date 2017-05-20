'use strict';

const Hapi = require('hapi');
const Path = require('path');


// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

const vision = require('./plugins/vision')(server);
const inert = require('./plugins/inert')(server);
const ext = require('./exts')(server);


require('./routes/home')(server);

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});