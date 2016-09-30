var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ["./app/main.js"]
    },

    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            { test: /\.json$/, loader: "json" },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: ["es2015"] } },
            { test: /\.css$/, loader: 'style!css?modules' },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        })
    ],
}
