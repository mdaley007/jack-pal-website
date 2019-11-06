const path = require("path");

module.exports = {
    entry: "./source/index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "distribution"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "distribution"),
        compress: true,
        port: 9000
    },
    mode: "development"
};