const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CleanPLugin = new CleanWebpackPlugin(['dist'], {
    root: __dirname,
    verbose: true,
    dry: false
})

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
        	new UglifyJsPlugin({
       			sourceMap: true,
        		cache: true
      		})
     	]
    },
    plugins: [CleanPLugin]
});