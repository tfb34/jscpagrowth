const path = require('path');
/*const HtmlWebpackPlugin = require('html-webpack-plugin');*/

module.exports = {
	mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
  	contentBase: './dist',
    disableHostCheck: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
 /* plugins: [
  	new HtmlWebpackPlugin({
  		title: 'Output Management'
  	})
  ],*/
  module:{
  	rules: [
  		{
  			test: /\.css$/,
  			use: [
  				'style-loader',
  				'css-loader'
  			]
  		},
  		{
  			test: /\.(woff|woff2|eot|ttf|otf)$/,
  			use: [
  				'file-loader'
  			]
  		}
  	]
  }
};