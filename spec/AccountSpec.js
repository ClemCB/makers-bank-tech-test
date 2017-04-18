describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account("name");
  });

  it("should be initiated with a 0 balance", function() {
    expect(account.balance).toEqual(0);
  });

  it("should be initiated with an account holder name", function() {
    expect(account.accountHolder).toEqual("name");
  });


});
