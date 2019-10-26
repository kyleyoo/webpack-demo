const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//commonJS 전체를 모듈로 배포하는 방법
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname, 'build2')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};