const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  beforeEach(function() {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" for inputs 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" for inputs 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;

    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});