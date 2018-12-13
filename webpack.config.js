import path from 'path';

import CleanWebpackPlugin from 'clean-webpack-plugin';

export default {
  entry: {
    client: './client/index.js',
    server: './server/renderApp.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  plugins: [new CleanWebpackPlugin(['dist'])]
};
