// import
const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//export
module.exports = {

  // parcel index.html
  // 파일을 읽어들이기 시작하는 진입점 설정

  entry: './js/main.js',

  //결과물을 반환하는 시점

  output:{
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js', 
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },


  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),

    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}