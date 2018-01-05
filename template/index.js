require('babel-register')({
  ignore: /node_modules\/(?!koa-*)(?!travisxu-egg-core)/,
});
require('babel-polyfill');

module.exports = require('./app/app.js');
