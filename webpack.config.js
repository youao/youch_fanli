const path = require('path');

module.exports = {

    mode: 'development', // production | development

    entry: {
        'index': './src/index.js',
        'rem': './src/utils/rem.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
        ]
    },

};