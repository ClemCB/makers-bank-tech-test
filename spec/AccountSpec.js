describe("Bank", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should be initiated with a 0 balance", function() {
    expect(account.balance).toEqual(0);
  });

  
});
