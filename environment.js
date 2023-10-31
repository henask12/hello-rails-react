const { environment } = require('@rails/webpacker');
const { ReactLoader } = require('jsbundling-rails/loaders');

if (environment.isDevelopment) {
  environment.config.merge(require('./webpack.config.dev'));
} else {
  environment.config.merge(require('./webpack.config.prod'));
}

environment.loaders.append('jsx', ReactLoader);

module.exports = environment;
