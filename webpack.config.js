const path = require("path");
const webpack = require("webpack");

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
    devtool: 'eval-source-map',
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
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    "@teamsupercell/typings-for-css-modules-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            localsConvention: "camelCase",
                            modules: {
                                localIdentName: "[name]-[local]-[hash:base64:6]"
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: "file-loader",
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: PATHS.output,
        filename: "bundle.js"
    },
    plugins: [
        new webpack.WatchIgnorePlugin([ /css\.d\.ts$/ ]),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};