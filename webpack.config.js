const path = require("path");

module.exports = [
  {
    name: "bundle",
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "app"),
      filename: "app.bundle.js",
    },
    mode: "development",
    watch: true,
    watchOptions: {
      ignored: ["**/node_modules", "**/packages"],
    },
  },
  {
    name: "build",
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "app"),
      filename: "app.bundle.js",
    },
    mode: "production",
  },
];
