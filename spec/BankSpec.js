describe("Bank", function() {
  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  it("should have an array to store accounts opened", function() {
    expect(bank.accounts.constructor.name).toEqual('Array');
  });

  it("should store accounts objects array (testing object)", function() {
    bank.createAccount(name)
    expect(bank.accounts[0].constructor.name).toEqual('Account');
  });

  it("should store accounts objects array (testing array length)", function() {
    bank.createAccount(name)
    expect(bank.accounts.length).toEqual(1);
  });
});
