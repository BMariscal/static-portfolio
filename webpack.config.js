const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');


// call dotenv and it will return an Object with a parsed key
const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
prev[`process.env.${next}`] = JSON.stringify(env[next]);
return prev;
}, {});

module.exports = {
    mode: 'development',
    entry: './App.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};