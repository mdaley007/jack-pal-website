const path = require("path");

const packageJson = require('./package.json');

// define paths
const PATHS = {
    entry:    path.join(__dirname, packageJson.main),
    // favicon: path.join(__dirname, 'source/media/favicon.ico'),
    // modules: path.join(__dirname, 'node_modules'),
    output:  path.join(__dirname, 'distribution')
    // test:    path.join(__dirname, 'tests'),
}

module.exports = {
    devServer: {
        contentBase: PATHS.output,
        compress: true,
        port: 9000
    },
    entry: PATHS.entry,
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: PATHS.output,
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};