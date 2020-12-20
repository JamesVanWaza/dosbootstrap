const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
    //	https://webpack.js.org/configuration/mode/
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        algolia: './src/js/algolia.js',
        firebase: './src/js/firebase.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public")
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        open: true,
        port: 9005
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },
    plugins: [
        // Main Page
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html-templates/index-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: '404.html',
            template: './src/html-templates/404-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'portfolio.html',
            template: './src/html-templates/portfolio-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/html-templates/contact-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'contact-two.html',
            template: './src/html-templates/contactwo-template.html'
        }),
        new FaviconsWebpackPlugin({
            logo: './src/images/D002-Favicon7@4x.png'
        })
    ],
    module: {
        rules: [{
                // Whenever a javascript file is found, babel should run and do not compile node_module files
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Supports all the browsers
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(scss)$/,
                use: [{
                        loader: 'style-loader', // inject CSS to page
                    }, {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    },
                    {
                        loader: 'sass-loader' // compiles Sass to CSS
                    }
                ]
            },
            // Start here for the URL Loader
            {
                test: /\.(png|jpg)$/,
                use: [
                    { loader: 'url-loader' }
                ]
            },
            // For Fontawesome Fonts to Work
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9]\.png|jpg)?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    }
};