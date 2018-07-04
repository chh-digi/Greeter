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
					use: {
						loader: 'ts-loader'
					}
				}
			]
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx']
		}
	}
};
