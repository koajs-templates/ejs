require('babel-register')({
  ignore: /node_modules\/(?!koa-*)/,
});
require('babel-polyfill');

module.exports = require('./app/app.js');
