const path = require("path");
const BomPlugin = require("webpack-utf8-bom");
const FixStyleOnlyEntries = require("webpack-fix-style-only-entries");
const assets = path.join(__dirname, "./public/script/");
const froms = {
  js: {
    scripts: assets + "app.js",
    modules: assets + "modules.js",
  },
};
module.exports = {
  mode: "production",
  entry: {
    scripts: froms.js.scripts,
    modules: froms.js.modules,
  },
  output: {
    filename: "[name]-build.js",
    path: path.join(__dirname, "public/script/dist/"),
  },
  target: ["web", "es5"],
  plugins: [new FixStyleOnlyEntries(), new BomPlugin(true)],
  performance: {
    hints: false,
  },
};
