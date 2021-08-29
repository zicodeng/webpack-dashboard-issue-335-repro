const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    pathinfo: false,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devServer: {
    historyApiFallback: true,
    https: false,
    hot: true,
    port: 4000,
    client: {
      logging: 'error',
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    allowedHosts: 'all',
  },
  module: {
    rules: [
      {
        test: /\.?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
};
