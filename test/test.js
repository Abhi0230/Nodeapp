var request = require('supertest');
var app = require(' .. /index.js'); describe('GET /', function() {
 it('respond with hello world', function(done) { //navigate to root and check the the respons
 request(app).get('/').expect('hello Mumbai', done);
 });
});
