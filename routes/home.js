'use strict';

module.exports = (server) => {
    server.route({
        method: 'GET',
        path: '/home/{lang}',
        handler: (request, reply) => {
            let lang = request.params.lang;
            return reply.view('home', {
                title: "Proof Of Concept",
                lang: lang
            }, { layout: request.layout });
        }
    });
}