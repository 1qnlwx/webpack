const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { join } = require("path");
module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: join(__dirname, "lib"),
    filename: "index.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, "public/index.html"),
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    open: true,
    port: 30000,
  },
  module: {
    rules: [
      { test: /\.css/i, use: ["style-loader", "css-loader"] },
      { test: /\.less/i, use: ["style-loader", "css-loader", "less-loader"] },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: "asset",
        generator: {
          filename: "amges/[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024,
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash:6][ext]",
        },
      },
      { test: /\.js$/i, use: [{loader:"babel-loader"}] },
      { test: /\.vue$/i, use: ["vue-loader"] },
    ],
  },
};
