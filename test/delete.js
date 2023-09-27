const { expect } = require('chai');
const supertest = require('supertest');
const request = supertest('https://reqres.in/api/users/');
const token = "eb8d67d3bf74710d9dbea54dcfcd6067eb57a2dd5950de9aa22a082ec308251d";


describe('users', () => {
    /**
     * This test case verifies the user delete operation of the 'users' API.
     * It sends a DELETE request and asserts the response.
     *
     * @param {Function} done - The Mocha-provided callback function that signals the test runner
     * that we have finished asynchronous testing. Invoking this callback with an error parameter
     * signals that the test has failed.
     *
     * @example
     * // The DELETE request is made to the 'users' API.
     * request.delete('2').end((err,res) => {...});
     *
     * // The test case asserts that the response status code is 204.
     * // If the status code is not 204, the test will fail.
     * expect(res.status).to.equal(204);
     */
    it('should delete the user', (done) => {
        request.delete(`2`).end((err, res) => {
            if (err) {
                console.log(err)
                return done(err)
            }
            else if (res.body) {
                console.log(res.body);
                expect(res.status).to.equal(204);
            }
            else {
                console.log('res.body undefined');
                expect(res.body).to.exist;
            }
            done();
        });
    });


});