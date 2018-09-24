const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
        'file-loader'
        ]
      }
    ]
  },
  plugins: [
   new HtmlWebPackPlugin({
     template: "./src/index.html",
     filename: "./index.html",
     meta: {
       viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
     }
   }),
   new MiniCssExtractPlugin({
     filename: "[name].css",
     chunkFilename: "[id].css"
    })
 ]
};
