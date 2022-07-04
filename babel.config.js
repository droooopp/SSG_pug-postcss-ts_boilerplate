module.exports = (api) => {
  api.cache(true)

  const presets = [['@babel/preset-env', {
    modules: false,
    useBuiltIns: 'entry',
    corejs: 3
  }]]

  const plugins = ["@babel/plugin-syntax-dynamic-import"]

  return {
    presets,
    plugins
  }
}
