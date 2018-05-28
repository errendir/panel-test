const path = require("path")
const webpack = require("webpack")

module.exports = {
  entry: {
    main: "./index"
  },

  output: {
    filename: '[name].bundle.js',
    // Output path using nodeJs path module
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-transform-react-jsx",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 9000
  }
}