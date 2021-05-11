const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./example/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/i,
        loader: "ts-loader",
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "example"),
        ],
      },
      // {
      //   test: /\.css$/i,
      //   use: [stylesHandler, "css-loader"],
      // },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      //   type: "asset",
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [new HtmlWebpackPlugin()],
};

module.exports = config;
