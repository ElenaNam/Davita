const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  //entry: ["./src/js/index.js", "./src/js/redirect.js", "./src/scss/style.scss"/* , "./src/scss/pages/redirect.scss" */],
  entry: {
    index: ["./src/js/index.js", "./src/scss/style.scss"],
    redirect: ["./src/js/redirect.js", "./src/scss/style.scss"],
    //redirect: "./src/js/redirect.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    //filename: "./js/bundle.js",
    filename: "./js/[name].js",
    assetModuleFilename: "assets/bg/[name][ext]",
  },
  devtool: "source-map",
  experiments: {
    asset: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        //include: path.resolve(__dirname, "src/js"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(gif|svg|jpg|png|)$/,
        /* type: "asset/resource", */
        type: "asset",
      },
      {
        test: /\.s?css/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      minify: false,
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "src/redirect.html",
      filename: "redirect.html",
      chunks: ["redirect"],
    }),
    new MiniCssExtractPlugin(),
    /*     new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      //chunkFilename: "style",
    }), */
    new CopyPlugin({
      patterns: [
        { from: "src/assets/images", to: "./assets/images" },
        { from: "src/assets/icons", to: "./assets/icons" },
        { from: "src/assets/favicon", to: "./assets/favicon" },
      ],
    }),
  ],
};
