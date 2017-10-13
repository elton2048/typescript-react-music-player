const path = require("path")
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const _ = require('lodash')

let RelativeBundleTracker = function(options) {
    BundleTracker.call(this, options);
}
RelativeBundleTracker.prototype = Object.create(BundleTracker.prototype);
RelativeBundleTracker.prototype.writeOutput = function(compiler, contents) {
    const relativePathRoot = path.join(__dirname) + path.sep
    _.forIn(contents.chunks, (bundle) => {
        _.forEach(bundle, (chunk) => {
            if (chunk.path.startsWith(relativePathRoot)) {
                chunk.path = chunk.path.substr(relativePathRoot.length);
            }
        });
    });

    BundleTracker.prototype.writeOutput.call(this, compiler, contents);
}

const __DEV__ = true

let config = {
    context: __dirname,

    entry: {
        'player': [
            'webpack-dev-server/client?http://localhost:8080',
            './'
        ]
    },

    output: {
        path: path.resolve('./assets/bundles/'),
        filename: "bundle_[name].js",
    },

    plugins: [
      // new webpack.HotModuleReplacementPlugin({}),

      /**
       * DefinePlugin to define globally use variables in the bundle.
       */
      new webpack.DefinePlugin({
          '__DEV__': __DEV__
      }),
      /**
       * BundleTracker to output the linked json file for Django webpack use.
       */
    //   new BundleTracker({filename: './webpack-stats.json'})
      new RelativeBundleTracker({filename: './webpack-stats.json'})
    ],

    module: {
      rules: [
          {
              test: /\.tsx?$/,
              include: __dirname,
              use: [ 'babel-loader', 'awesome-typescript-loader' ]
          },
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
          },
          {
              test: /\.(j|t)s$/,
              use: ['source-map-loader'],
              enforce: "pre"
          }
      ]
    },

    resolve: {
      // modulesDirectories: ['node_modules', 'bower_components'],
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
}

module.exports = config;
