var path = require("path")
var webpack = require('webpack')
// var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: {
      'main': [
          'webpack-dev-server/client?http://localhost:8080',
          './'
      ]
  },

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name].js",
  },

  plugins: [
    // new BundleTracker({filename: './webpack-stats.json'}),
    // new webpack.HotModuleReplacementPlugin({}),
  ],

  module: {
    rules: [
        {
            test: /\.jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
            }
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        // {
        //     test: /\.(eot|svg|ttf|woff|woff2)$/,
        //     use: [ 'file-loader' ]
        //     // loader: 'url?limit=10000'
        // },
        {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }
    ]
  },

  resolve: {
    // modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['.js', '.jsx']
  },
}
