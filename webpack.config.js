import path from 'path';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
const is_dev = process.env.NODE_ENV === 'development';

export default {
  mode: is_dev ? 'development' : 'production',
  entry: {
    bundle: [
      // TODO: enable this later
      // '@babel/polyfill', // enables async-await
      './client'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },

  devtool: 'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    // open: true,
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    proxy: [
      {
        context: ['/', '/api'],
        target: 'http://localhost:7777'
      }
    ],
    port: 3030
    // overlay: {
    //   warnings: false,
    //   errors: false
    // }
  }
};
