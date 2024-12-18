# RestaurantPage

Quick setup:
npm init -y
npm install --save-dev webpack webpack-cli
mkdir src && touch src/index.js src/another.js
touch webpack.config.js

npm install --save-dev html-webpack-plugin
touch src/template.html
npm install --save-dev style-loader css-loader
touch src/styles.css
npm install --save-dev html-loader
npm install --save-dev webpack-dev-server

optional: npm install -D babel-loader @babel/core @babel/preset-env webpack

To host, 
npx webpack serve

Open it on 
http://localhost:8080/










const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};


To deploy on GitHub Pages:
-make a new branch to deploy from (git branch gh-pages)
-commit any work and push
-git checkout gh-pages && git merge main --no-edit
-npx webpack or npm run build
-git add dist -f && git commit -m "deployment commit"
-git subtree push --prefix dist origin gh-pages
-git checkout main