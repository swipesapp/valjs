var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: 'eval',
  entry: {
    val: [
      './src/index'
    ],
    example: './src/example',
  },
  output: {
      path: path.join(__dirname, 'dist'),
      filename: "[name].js",
      library: 'val',
      libraryTarget: 'umd',
      umdNamedDefine: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [ {
          loader: 'babel-loader',
          query: {
            babelrc: false,
            presets: [
              ['es2015', { modules: false }]
            ]
          }
        }],
        exclude: /node_modules/
      }
    ]
  }
};
