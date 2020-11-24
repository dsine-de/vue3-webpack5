const webpack = require('webpack');
const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist/')
	},
	module: {
		rules: [{
			test: /\.vue$/,
			use: 'vue-loader'
		}]
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: false
		}),
		new HtmlWebpackPlugin({
			template: './src/html/index.html'
		})
	]
};
