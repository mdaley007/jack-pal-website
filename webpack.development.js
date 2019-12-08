const Webpack = require('webpack')
const Merge   = require('webpack-merge')
const common  = require('./webpack.common')

// CONSTANTS
const defaultDevServerPort = 8080


// EXPORT WEBPACK DEVELOPMENT CONFIGURATION
module.exports = Merge(common, {
    devtool: 'eval-source-map',
    devServer: {
        port: process.env.PORT | defaultDevServerPort
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    '@teamsupercell/typings-for-css-modules-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            localsConvention: 'camelCase',
                            modules: {
                                localIdentName: '[name]-[local]-[hash:base64:6]'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                },
                exclude: /node_modules/
            },
        ]
    },
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new Webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' })
    ]
})