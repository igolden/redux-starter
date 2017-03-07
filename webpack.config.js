var webpack = require("webpack");
var path = require("path");

var APP_DIR = path.resolve(__dirname, 'app');
var BUILD_DIR = path.resolve(__dirname, 'dist');

var config = {
  entry: [
    'webpack-hot-middleware/client',
    APP_DIR + '/index.js',
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module : {
    loaders : [{
      test : /\.js?/,
      include: APP_DIR,
      loaders: ['react-hot', 'babel']
  }]
  }
};


module.exports = config;
