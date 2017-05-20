'use strict';
const Path = require('path');
module.exports = (server) => {
    server.route({
        method: 'GET',
        path: "/bower_components/{file*}",
        handler: (request, reply) => {
            return reply.file(Path.join(__dirname, '../bower_components/' + request.params.file));
        }
    });
    server.route({
        method: 'GET',
        path: "/dist/{file*}",
        handler: (request, reply) => {
            return reply.file(Path.join(__dirname, '../dist/' + request.params.file));
        }
    });
}