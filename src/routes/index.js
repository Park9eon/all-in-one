module.exports = (server) => {
    server.route({
        method: 'GET',
        path: '/home',
        handler: async () => {
            return 'Hello, World!';
        }
    });
};
