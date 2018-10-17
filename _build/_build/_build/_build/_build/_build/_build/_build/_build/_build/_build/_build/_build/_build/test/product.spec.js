'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_chai2.default.use(_chaiHttp2.default);
var should = _chai2.default.should();
var expect = _chai2.default.expect;

describe('GET /products', function () {
  it('should return a status code of 200', function (done) {
    _chai2.default.request(_index2.default).get('/api/v1/products').end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
});
describe('GET /products/:id', function () {
  it('should return 404 if an invalid id is passed', function (done) {
    _chai2.default.request(_index2.default).get('/api/v1/products/' + 9).end(function (err, res) {
      res.should.have.status(404);
      done(err);
    });
  });
  it('should return an valid if id is valid', function (done) {
    _chai2.default.request(_index2.default).get('/api/v1/products/' + 1).end(function (err, res) {
      expect(res.body).to.be.an('object');
      done(err);
    });
  });
});
describe('POST /products', function () {
  it('should return 400 if empty input is passed', function (done) {
    _chai2.default.request(_index2.default).post('/api/v1/products').send({}).end(function (err, res) {
      res.should.have.status(400);
      done(err);
    });
  });
  it('should return 201 if product was successfully created', function (done) {
    _chai2.default.request(_index2.default).post('/api/v1/products').send({
      id: 1,
      name: 'air max',
      price: 10000,
      quantityInInventory: 3
    }).end(function (err, res) {
      expect(res.body).to.be.an('object');
      done();
    });
  });
});