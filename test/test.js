var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with hello Tushar', function(done) { //navigate to root and check the the response is "hello Tushar"
 request(app).get('/').expect('hello Tushar', done);
 });
});
