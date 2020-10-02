const path = require("path");
module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
  },
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/,
      },
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
