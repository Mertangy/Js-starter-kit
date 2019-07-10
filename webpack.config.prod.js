import path from 'path';
import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import WebpackMdHash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor:path.resolve(__dirname,'src/vendor'),
    main:path.resolve(__dirname, 'src/index')

  },
    
  
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    //Generate an external css file with hash in the file name
    new ExtractTextPlugin('[name].[contenthash].css'),
    //hash the files using MD5 so that their names change when the content changes
    new WebpackMdHash(),
    //use commonchunkplugin to create a separate bundle
    //of vendor libraries so that they are cached separately
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),
    //create html file that includes referene to bundled js
    new HtmlWebPackPlugin({
      template:"src/index.html",
      inject: true
    }),
    //eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    //minify js
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
