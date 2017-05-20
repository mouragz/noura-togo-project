'use strict';
const Path = require('path');
module.exports = (server) => {
    server.register(require('vision'), (err) => {
        if (err) {
            throw err;
        }
        server.views({
            engines: {
                html: require('handlebars')
            },
            relativeTo:Path.join(__dirname,'../../') ,
            /*path: 'templates/views',
            layout: "default",
            layoutPath: 'templates/layout'*/
            path: 'dist/views',
            layout: "default",
            layoutPath: 'dist/layout'
        });
    });
}