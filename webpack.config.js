const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  target: 'node',
  externals: nodeExternals({
    whitelist: ['webpack-hot-middleware/client?path=/__webpack_hmr&reload=true']
  }),
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use:['css-loader']
      }
    ]
  }
}
