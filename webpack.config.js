module.exports = {
  entry: ['./src/main.js', './src/auth/index.js'],
  output: {
    path: __dirname + '/static/',
    publicPath: 'static/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'vue' }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}