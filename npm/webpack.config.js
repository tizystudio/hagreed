// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: "./js/hagreed.init.js",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        open: true,
        port: 9000,
        host: "localhost",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
};
