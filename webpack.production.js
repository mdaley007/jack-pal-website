// const HtmlWebpackPlugin       = require('html-webpack-plugin')
const MiniCssExtractPlugin    = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin            = require('terser-webpack-plugin')
const Webpack                 = require('webpack')
const Merge                   = require('webpack-merge')
const common                  = require('./webpack.common')
const packageJson             = require('./package.json')


// EXPORT WEBPACK PRODUCTION CONFIGURATION
module.exports = Merge(common, {
    entry: {
        vendor: Object.keys(packageJson.dependencies)
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
                        name: '[name]-[hash].[ext]',
                        outputPath: 'assets'
                    }
                },
                exclude: /node_modules/
            },
        ]
    },
    output: {
        filename: '[name]-[contentHash].js',
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //         minify: { 
        //             collapseWhitespace: true,
        //             removeAttributeQuotes: true,
        //             removeComments: true
        //         }
        //     }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contentHash].css'
        }),
        new Webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })
    ]
})