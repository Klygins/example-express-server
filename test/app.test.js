const request = require('supertest');
require('dotenv').config()

var app = require('../app').app;

describe('Basics', () => {
    it('Server is up', function (done) {
        request(app).get('/').expect('If you see this, express server is working fine :)').end(done);
    });
})
