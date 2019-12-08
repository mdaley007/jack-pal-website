const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const   HtmlWebpackPlugin    = require('html-webpack-plugin')
const   HtmlWebpackTemplate  = require('html-webpack-template')
const   Path                 = require('path')
const   Webpack              = require('webpack')
const   packageJson          = require('./package.json')

// CONSTANTS
module.exports = PATHS = {
    main:    Path.join(__dirname, packageJson.main),
    favicon: Path.join(__dirname, 'source/assets/favicon.ico'),
    output:  Path.join(__dirname, 'build')
}
const HTML = {
    appMountId: 'root',
    filename: 'index.html',
    links: [],
    title: 'Jack Pal Productions'
}

// EXPORT WEBPACK COMMON CONFIGURATIONS
module.exports = {
    entry: {
        main: PATHS.main
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                use: 'json-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: PATHS.output
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            appMountId: HTML.appMountId,
            favicon: PATHS.favicon,
            filename: HTML.filename,
            inject: false,
            links: HTML.links,
            meta: [
                {description: packageJson.description},
                {keywords:    packageJson.keywords},
            ],
            mobile: true,   // width=device-width, initial-scale=1
            template: HtmlWebpackTemplate,
            title: HTML.title
        }),
        new Webpack.WatchIgnorePlugin([ /css\.d\.ts$/ ]),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}