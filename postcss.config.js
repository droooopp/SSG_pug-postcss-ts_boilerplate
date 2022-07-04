module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-each')(),
    require('postcss-each-variables')(),
    require('postcss-for')(),
    require('postcss-custom-properties')(),
    require('postcss-custom-media')(),
    require('postcss-color-function')(),
    require('postcss-mixins')(),
    require('postcss-nested')(),
    require('postcss-simple-vars')(),
    require('postcss-calc')(),
    require('postcss-size')(),
    require('postcss-conditionals')(),
    require('css-mqpacker')(),
    require('autoprefixer')(),
    require('cssnano')({
      autoprefixer: false
    })
  ]
}
