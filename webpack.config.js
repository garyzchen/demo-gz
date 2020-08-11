const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./site/app.js",
  output: {
    path: path.resolve(__dirname, "server/public/base"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.js$/, loader: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./site/base.html",
    }),
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
