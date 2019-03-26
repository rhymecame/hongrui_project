var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    // context:__dirname + '/src',
    devtool:debug ? "inline-sourcemap" : null,
    entry:"./src/js/root.js",
    module:{
        rules:[{
            test:/\.js$/,
            exclude:/(node_modules|bower_components)/,
            loader:'babel-loader',
            query:{
                presets:['react','es2016'],
                plugins:['react-html-attrs'],
            }
        },
        {test:/\.css$/,
         loader:'style-loader!css-loader',
         } 
        ]
    },
    output:{
        path:path.resolve(__dirname,'./src'),
        filename:"bundle.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle:false,sourcemap:false}),
    ],
};