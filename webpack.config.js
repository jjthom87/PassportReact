var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'./client/app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './client/public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			applicationStyles: './client/app/styles/app.scss'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	sassLoader: {
		includePaths: [
		]
	},
	devtool: 'inline-source-map'
};