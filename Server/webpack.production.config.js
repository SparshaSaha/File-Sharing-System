const path = require('path');
const { NODE_ENV = 'production' } = process.env;
module.exports = {
    entry: path.resolve(__dirname, 'source') + '/index.ts',
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'startApp.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    }
}