const autoprefixer = require('autoprefixer');
const precss = require('precss');

const config = {
    plugins: [
        precss,
        autoprefixer({
            browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7']
        })
    ]
};

module.exports = config;