beforeEach(function() {
  jasmine.clock().install();
  var baseTime = new Date(2017, 8, 2);
  jasmine.clock().mockDate(baseTime);
});

afterEach(function() {
  jasmine.clock().uninstall();
});
