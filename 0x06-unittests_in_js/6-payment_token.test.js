const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with correct data when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should do nothing when success is false', function(done) {
    getPaymentTokenFromAPI(false)
      .then((result) => {
        done(new Error('Promise resolved when it should not have'));
      })
      .catch(() => {
        done(new Error('Promise rejected when it should have done nothing'));
      });

    setTimeout(() => {
      done();
    }, 100);
  });
});