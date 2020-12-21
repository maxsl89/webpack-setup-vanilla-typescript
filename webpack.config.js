const path = require("path");
// плагин для работы с html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// плагин для того, чтобы в папке dist всегда лежали актуальные файлы
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  devtool: "eval-source-map",
  entry: "./src/index.ts",
  plugins: [
    new HtmlWebpackPlugin({
      // Load a custom template (lodash by default)
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        // обработка идет справа налево
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    // needs for importing files
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true,
  },
};
