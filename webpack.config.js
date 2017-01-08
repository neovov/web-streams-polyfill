const pkg = require('./package.json');

module.exports = {
	entry: './index.js',
	output: {
		filename: `${pkg.name}.js`,
		path: './dist'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: 'node_modules',
			loader: 'babel-loader'
		}]
	},
	devtool: "inline-source-map"
}