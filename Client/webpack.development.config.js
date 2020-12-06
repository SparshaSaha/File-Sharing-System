const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./sources/index.html"
});

module.exports = {
    mode: "development",
    entry: "./sources/index.tsx",
    output: {
        path: path.resolve(__dirname, "dev"),
        filename: "main.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [htmlPlugin]
};
