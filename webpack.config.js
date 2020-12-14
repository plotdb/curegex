const path = require("path");

module.exports = {
  entry: {
    curegex: "./src/curegex.ls",
    "curegex.tw": "./src/curegex.tw.ls"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: { rules: [
    { test: /\.ya?ml$/, use: 'yaml-loader', type: 'json'},
    { test: /\.ls$/, use: 'livescript-loader'}
  ]},
  resolve: { extensions: ['yaml', 'js'] }
};
