var commonConfig = require('./webpack.config.common.js');
var webpackMerge = require('webpack-merge');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
	devtool: 'cheap-module-eval-source-map',

	output: {
		path: path.resolve(__dirname + '/src/public/js/app'),
		filename: 'bundle.js',
		publicPath: "/js/app/",
		chunkFilename: '[id].chunk.js'
	}

});
