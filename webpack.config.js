const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
      // contentBase: path.join(__dirname, 'dist'),
      port: 9000,
      hot: true
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: "",
          template: path.resolve(__dirname, "src/index.html")
      }),
  ],
  module: {
      rules: [
          {
              test: /\.(js|jsx)/i,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      // The following line can be replaced by a .babelrc.json config file
                      presets: [ "@babel/preset-env", "@babel/preset-react" ]
                  }
              }
          },
          {
              test: /\.s(ass|css)$/i,
              use: ["style-loader", "css-loader", "sass-loader"]
          }
      ]
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  }
}
