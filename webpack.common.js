const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HTMLPlugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/public', 'index.html')
})

const CSSPlugin = new MiniCssExtractPlugin({
	filename: '[name].css',
    chunkFilename: '[id].css'
})

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
		        test: /\.css$/,
		        
		        use: [
			        	{
			        		loader: MiniCssExtractPlugin.loader
			       		},
			        'css-loader'
			    ]
			}
		]
	},
	plugins: [HTMLPlugin,CSSPlugin]
}