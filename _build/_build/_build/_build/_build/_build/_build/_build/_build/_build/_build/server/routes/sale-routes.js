'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Sale = require('../src/controller/Sale');

var _Sale2 = _interopRequireDefault(_Sale);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var router = _express2.default.Router();

router.get('/', _Sale2.default.getAll);