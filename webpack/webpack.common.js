const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: path.join(__dirname, "..", "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "..", "docs"),
    filename: "[name].js",
    assetModuleFilename: "../assets/[name][ext]",
  },
  cache: true,
  target: "web",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /.(svg|png|gif|jpe?g)$/,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "src", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    })
  ],
};