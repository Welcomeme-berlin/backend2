const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

test('apartments are returned as json', async () => {
  await api
    .get('/api/apartments')
    .expect(200)
    .expect('Content-Type', /application\/json/);
}, 100000);

afterAll(() => {
  mongoose.connection.close();
});
