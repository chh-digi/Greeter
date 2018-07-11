var webpack = require('webpack');
var Path = require('path');
var FileSystem = require("fs");

module.exports = function (options) {
	var outputDir = "";
	return {
        mode: "development",
        watch: true,
		entry: {
			app: './src/app',
		},
		output: {
			filename: 'bundle.js',
			path: Path.join(__dirname, outputDir + "/build"),
			publicPath: 'build/'
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: 'ts-loader'
				}, {
					test: /\.scss$/,
					use: [
						{
							loader: 'style-loader'
						}, {
							loader: 'css-loader',
							options: {
								modules: true
							}
						}, {
							loader: 'sass-loader'
						}
					]
				}
			]
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx']
		}
	}
};
