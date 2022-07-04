const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development'

  return {
    entry: {
      'app': path.resolve(__dirname, './src/typescript/app.ts')
    },
    output: {
      filename: 'app.js',
      path: path.join(__dirname, `${env.path_dist}/SSG_pug-postcss-ts_boilerplate/feature/js/`)
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '@utilities': path.resolve(__dirname, './src/js/utilities'),
        '@modules': path.resolve(__dirname, './src/js/modules'),
        '@namespaces': path.resolve(__dirname, './src/js/namespaces')
      }
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
        {
          test: /\.ts$/,
          loaders: ['babel-loader', 'ts-loader']
        }
      ]
    },
    devtool: IS_DEVELOPMENT ? 'source-map' : 'none',
    optimization: {
      minimizer: IS_DEVELOPMENT ? [] : [
        new TerserPlugin({
          terserOptions: {
            compress: { drop_console: true }
          }
        })
      ]
    }
  }
}

