const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) {
    throw result.error;
}

const watch = process.env.NODE_ENV === 'production' ? false : ['src'];

module.exports = {
    apps: [{
        name: 'foodnote',
        script: 'src/app.js',
        watch,
    }]
};
