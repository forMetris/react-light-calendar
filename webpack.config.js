const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'ReactLightCalendar'
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ],
  externals: {
    react: 'React',
    moment: 'moment'
  }
}
