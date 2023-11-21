const request = require('supertest');
const { expect } = require('chai');
const { baseUrl } = require('../Helper/baseUrl');

describe('GET /api/users?page=2', function () {
  /**
  * Test case to get user details
  * @async
  * @function
  */
  it('should get user details', function (done) {
    const userId = 2;
    request(baseUrl)
      .get(`/api/users/${userId}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  /**
  * Test case to get the list of users
  * @async
  * @function
  */
  it('get the list of the users', function (done) {
    request(baseUrl)
      .get(`/api/users?page=2`)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        done();
      });
  });

});