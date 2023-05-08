const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const TerserPlugin = require("terser-webpack-plugin");

const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
    //	https://webpack.js.org/configuration/mode/
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        app: './src/js/app.js',
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public")
    },
    target: 'web',
    devServer: {
        open: {
            app: 'Google Chrome'
        },
        watchFiles: {
            paths: ['src/']
        },
        port: 2003
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        // Main Page
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html-templates/index-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            template: './src/html-templates/blog-template.html'
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
        new HtmlWebpackPlugin({
            filename: 'signin.html',
            template: './src/html-templates/signin-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'signin-github.html',
            template: './src/html-templates/signin-github-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'admin/admin.html',
            template: './src/html-templates/admin/admin-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'admin/portfolio.html',
            template: './src/html-templates/admin/portfolio-template.html'
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