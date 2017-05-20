'use strict';

const MobileDetect = require('mobile-detect');

module.exports = (server) => {
    server.ext('onPreHandler', (request, reply) => {
        let userAgent = request.headers["user-agent"];
        let md = new MobileDetect(userAgent);
        let isMobile = md.mobile() != undefined;
        request.layout = isMobile ? "mobile" : "default"
        reply.continue();
    })
}