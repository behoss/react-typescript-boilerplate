const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const config = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "example",
    host: "localhost",
    port: 4000,
    open: true,
  },
};

module.exports = merge(common, config);
