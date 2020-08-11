const webpack = require('webpack')
const path = require('path')

const nodeENV = process.env.NODE_ENV || 'production'

module.exports = {
	entry: path.resolve(__dirname, 'src/modules/app.js'),
	output: {
    path: path.resolve(__dirname, 'src/modules/dist'),
    filename: 'build.js'
	},
	devServer: {
		contentBase: 'src/modules/dist'
	},
	mode: nodeENV,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
}