var webpack = require('webpack');

module.exports = {
	entry: {
		'app': './src/main.ts'
	},

	resolve: {
		extensions: ['.js', '.ts']
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
                    {loader: 'awesome-typescript-loader', options: {transpileOnly: true}},
                    {loader: 'angular2-template-loader'},
                    {loader: 'angular-router-loader'}
                ]
			},
			{
				test: /\.html$/,
				use: [{ loader: 'html-loader' }]
			},
			{
				test: /\.css$/,
				use: [{loader: 'raw-loader'}]
			}
		],
		exprContextCritical: false
	}
};