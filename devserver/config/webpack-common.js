const stylelint = require('stylelint')
const cssLintRules = require('./csslint.json')
const path = require('path')

module.exports = function(entries, output, includes) {
  const babelLoaderConfig = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ['babel?presets[]=es2015&presets[]=react']
  }

  return {
    babelLoader: babelLoaderConfig,
    entry: entries,
    resolveLoader: {
      root: path.join(__dirname, "..", "node_modules"),
      fallback: path.join(__dirname, "..")
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    output: {
      path: output,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      preLoaders: [
        {
          test: /\.css$/,
          loaders: ['postcss']
        }
      ],
      loaders: [
        {
          test: /package\.json$/,
          loader: 'PackageJson'
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'
        },
        {test: /(\.css|\.scss|\.sass)$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']},
        { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192' },
        babelLoaderConfig,
        {
          test: /\.(gif|svg|woff|woff2|ttf|eot|html)$/,
          loader: 'file'
        }
      ]
    },
    postcss: function () {
      return [stylelint({
        rules: cssLintRules
      })];
    }
  }
}