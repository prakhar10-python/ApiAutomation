const { expect } = require('chai');
const supertest = require('supertest');
const request = supertest('https://reqres.in/api/users/');

/**
 * Test suite for the 'put' Method.
 */
describe('users', () => {
    /**
     * This test case verifies the user update operation of the 'users' API.
     * It sends a PUT request with user details and asserts the response.
     *
     * @param {Function} done - The Mocha-provided callback function that signals the test runner
     * that we have finished asynchronous testing. Invoking this callback with an error parameter
     * signals that the test has failed.
     *
     * @example
     * // 'data' is the payload sent in the PUT request.
     * const data = {
     *   "name": "morpheus",
     *   "job": "zion resident"
     * }
     *
     * // The PUT request is made to the 'users' API.
     * request.put(`2`).send(data).end((err,res) => {...});
     *
     * // The test case asserts that the response body includes the data we sent.
     * // If the response body does not include the data, the test will fail.
     * expect(res.body).to.deep.include(data);
     */
    it('should update the user', (done) => {
        const data={
            "name": "morpheus",
            "job": "zion resident"
        }
        request.put(`2`).send(data).end((err,res)=>{
            if(err){
                console.log(err)
                return done(err)
            }
            else if(res.body){
                console.log(res.body);
                expect(res.body).to.deep.include(data);
            }
            else{
                console.log('res.body undefined');
                expect(res.body).to.exist;
            }
            done();
        });
    });

    
});