module.exports = (server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: async () => {
            return 'Hello, World!';
        }
    });
};
