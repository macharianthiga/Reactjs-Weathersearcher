module.exports = {
  entry: './app/app.jsx',
  output: {
    path:__dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {

    },
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
