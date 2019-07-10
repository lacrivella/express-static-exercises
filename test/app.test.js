const request = require('supertest');
const app =  require('../lib/app');

describe('app route', () => {
  it('has dogs route', () => {
    return request(app)
      .get('/api/v1/dogs')
      .then(res => {
        expect(res.body).toEqual([
          { name: 'Corbin', age: 5, weight: '98lbs' },
          { name: 'Nolan', age: 14, weight: '45lbs' },
          { name: 'Magic', age: 12, weight: '105lbs' },
        ]);
      });
  });
});