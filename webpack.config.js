const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin"); 

module.exports = {
  entry: ["./src/js/index.js"],
  output: {
    filename: "./js/bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/js"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/images", to: "./assets/images" },
        { from: "src/assets/icons", to: "./assets/icons" },
        { from: "src/assets/bg", to: "./assets/bg" },
        { from: "src/assets/favicon", to: "./assets/favicon" },
        { from: "src/assets/fonts", to: "./assets/fonts" },
      ],
    }),    
  ],
};
