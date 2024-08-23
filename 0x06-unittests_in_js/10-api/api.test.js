const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('/available_payments endpoint', () => {
  it('should return correct payment methods', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      const parsedBody = JSON.parse(body);
      expect(parsedBody).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('/login endpoint', () => {
  it('should return welcome message with username', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: { userName: 'Betty' }
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});