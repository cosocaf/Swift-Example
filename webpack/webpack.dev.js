const merge = require("webpack-merge");
const common = require("./webpack.common");

const path = require("path");

module.exports = merge.merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "..", "docs"),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    open: true,
    hot: true,
    client: {
      overlay: true,
      progress: true,
    },
  }
});