const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'example/index.js'),
  output: {
    path: path.join(__dirname, 'example'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  devtool: 'eval',
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel'
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'example'),
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  }
}
