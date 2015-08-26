'use strict';

describe('Service: windowSizeFac', function () {

  // load the service's module
  beforeEach(module('samuelncomApp'));

  // instantiate service
  var windowSizeFac;
  beforeEach(inject(function (_windowSizeFac_) {
    windowSizeFac = _windowSizeFac_;
  }));

  it('should do something', function () {
    expect(!!windowSizeFac).toBe(true);
  });

});
