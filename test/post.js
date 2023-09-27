/**
 * This script contains tests for interacting with the 'users' endpoint of the gorest API.
 * 
 * @module Tests for gorest API 'users' endpoint.
 * @requires chai
 * @requires supertest
 */

// Import required modules.
const { expect } = require('chai');
const supertest = require('supertest');

// Set base URL and access token for gorest API.
const request = supertest('https://gorest.co.in/public/v2/');
const token = "eb8d67d3bf74710d9dbea54dcfcd6067eb57a2dd5950de9aa22a082ec308251d";

/**
 * Generates a random email.
 * 
 * @returns {string} Randomly generated email.
 */
function randomEmailGenerator(){
    let randomNum = Math.floor(Math.random() * 1000000);
    let email = `test${randomNum}@mail.com`;
    return email;
}

// Define tests.
describe('users', () => {

    /**
     * Test for GET request on 'users' endpoint.
     */
    it('GET ON USERS', (done) => {
        request.get(`users?access-token=${token}`).end((err, res) => {
            if (err) {
                done(err);
            }
            else if (res.body) {
                expect(res.body).to.not.be.empty;
            }
            else {
                console.log('res.body is undefined');
                expect(res.body).to.exist;
            }
            done();
        });
    });

    /**
     * Test for GET request on 'users/id' endpoint.
     */
    it('/Users/Id', (done) => {
        request.get(`posts?access-token=${token}`).end((err, res) => {
            if (err) {
                done(err)
            }
            else if (res.body) {
                expect(res.body[1].id).to.equal(69975);
            }
            else {
                console.log('users body empty');
                expect(res.body).to.exist;
            }
            done();
        })
    });

    /**
     * Test for GET request on 'users/id/title' endpoint.
     */
    it('/users/id/title of the post', (done) => {
        request.get(`/posts?access-token=${token}`).end((err, res) => {
            if (err) {
                done(err)
            }
            else if (res.body) {
                expect(res.body[1].title).to.equal('Carpo adiuvo bestia talis conatus talio odio sapiente alii.')
            }
            else{
                console.log('Title Not Matched');
                expect(res.body).to.exist;
            }
            done();
        })
    });

    /**
     * Test for POST request on 'users' endpoint.
     */
    it('POST API', (done)=>{
        const data={
            "email": randomEmailGenerator(),
            "name": "p singh",
            "gender" : "male",
            "status": "active"
            };
        request.post(`users?access-token=${token}`).send(data).end((err, res) => {
            if (err) {
                return done(err);
            }
            else if (res.body) { 
                console.log(res.body.id);
                expect(res.body.id).to.be.a('number');
            }
            else {
                console.log('res.body is undefined');
                console.log("res.body undefined")
                expect(res.body).to.exist;
            }
            done();
        });
    })

    /**
     * Test for POST request on 'users' endpoint with additional checks for response body.
     */
    it('POST API2', (done)=>{
        const data={
            "email": randomEmailGenerator(),
            "name": "p singh",
            "gender" : "male",
            "status": "active"
            };
        request.post(`users?access-token=${token}`).send(data).end((err, res) => {
            if (err) {
                console.log(err)
                return done(err);
            }
            else if (res.body) { 
                console.log('in else if')
                console.log(res.body);
                expect(res.body).to.deep.include(data);
            }
            else {
                console.log("in else")
                console.log("res.body undefined")
                expect(res.body).to.exist;
            }
            done();
        });
    });
})