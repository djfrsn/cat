import path from 'path';

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
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },

  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin(['dist'])],
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    watchContentBase: true,
    proxy: [
      {
        context: ['/api', '/auth'],
        target: 'http://localhost:3088',
        secure: false
      }
    ],
    port: 3030
    // overlay: {
    //   warnings: false,
    //   errors: false
    // }
  }
};
