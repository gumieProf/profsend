// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require("path");
const BomPlugin = require("webpack-utf8-bom");
const webpack = require("webpack");
const jquery = require("jquery");

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: "development",
  // エントリーポイントの設定
  entry: "./public/script/app.js",
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: "bundle.js",
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, "public/script/"),
  },
  plugins: [
    new BomPlugin(true),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Cookie: "Cookie",
    }),
  ],
};
