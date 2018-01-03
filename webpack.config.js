const path = require('path');
const script = process.env.npm_lifecycle_event;

module.exports = function() {
  let config = {};

  config.entry = path.resolve(__dirname, 'dev', 'index.js');
  config.output = {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dev'),
    library: 'FractionLoader'
  };

  if (script === 'dev') {
    config.module = {
      rules: [
        {
          test: /.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    }
  }

  config.devServer = {
    contentBase: './dev'
  };

  if (script === 'build') {
    // uglify
  }

  return config;
}();