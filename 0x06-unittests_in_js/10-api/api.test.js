const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/:id returns 404 for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-1`, (_err, res, body) => {
      expect(res.statusCode).to.equal(404);
      expect(body).to.equal('Cannot process');
      done();
    });
  });

  it('GET /cart/:id returns 404 for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/abc`, (_err, res, body) => {
      expect(res.statusCode).to.equal(404);
      expect(body).to.equal('Cannot process');
      done();
    });
  });

  describe('GET /available_payments', () => {
    it('returns correct response', (done) => {
      request.get(`${API_URL}/available_payments`, (_err, res, body) => {
        expect(res.statusCode).to.equal(200);
        const expectedResponse = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(JSON.parse(body)).to.deep.equal(expectedResponse);
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('returns correct response for valid userName', (done) => {
      const options = {
        url: `${API_URL}/login`,
        method: 'POST',
        json: { userName: 'Betty' }
      };
      request(options, (_err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});
