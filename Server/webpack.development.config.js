const path = require('path');
const { NODE_ENV = 'development' } = process.env;
module.exports = {
    entry: path.resolve(__dirname, 'source') + '/index.ts',
    mode: NODE_ENV,
    target: 'node',
    watch: NODE_ENV === 'development',
    output: {
        path: path.resolve(__dirname, 'dev'),
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