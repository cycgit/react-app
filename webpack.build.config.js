var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  entry: [
    path.resolve(__dirname, 'src/app.jsx')
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '../',
    filename: './app.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css')
    }, {
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
    }, {
      test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: 'fonts/[name].[ext]'
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new ExtractTextPlugin('css/app.css'),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ],
  postcss: [autoprefixer({
    browsers: ['android >= 4.0']
  })]
};
