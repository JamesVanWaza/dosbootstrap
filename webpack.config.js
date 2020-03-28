const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    //	https://webpack.js.org/configuration/mode/
    mode: 'development',
    entry: "./src/index.js",
    //	entry: {
    //		about: './src/about.js',
    //		contact: './src/contact.js'
    //	},
    output: {
        //		filename: "[name].bundle.js",
        filename: "main.js",
        //		path: path.resolve(__dirname, "public") Can change directory name
        path: path.resolve(__dirname, "public")
    },
    // Can change the entry name
    // entry: "./mbuzi/mbuzide.js",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 9002
    },
    optimization: {
        //		splitChunks: {
        //			chunks: 'all'
        //		}
        minimizer: [new UglifyJsPlugin()]
    },
    plugins: [new HtmlWebpackPlugin({
		title: "My Page Title - Yay",
	})],
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
                }, {
                    loader: 'postcss-loader', // Run postcss actions
                    options: {
                        plugins: function() { // postcss plugins, can be exported to postcss.config.js
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
            // Start here for the URL Loader
            {
                test: /\.(png|jpg)$/,
                use: [
                    { loader: 'url-loader' }
                ]
            }
        ]
    },
	resolve: {
    	extensions: ['.js', '.jsx', '.scss']
  }
}