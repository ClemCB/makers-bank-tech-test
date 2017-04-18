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

  it("should store transactions in an array", function() {
    expect(account.transactions.constructor.name).toEqual("Array");
  });

  it("should update balance when a customer makes a deposit", function() {
    account.deposit(300)
    expect(account.balance).toEqual(300);
  });

  it("should add a transaction to the array when a customer makes a deposit", function() {
    account.deposit(300)
    expect(account.transactions.length).toEqual(1);
  });

  it("should save details of the transaction when a customer makes a deposit", function() {
    account.deposit(300)
    expect(account.transactions[0].credit).toEqual(300);
  });

  it("should save the time of a deposit", function() {
    account.deposit(300)
    expect(account.transactions[0].date).toEqual("Tue Apr 18 2017");
  });

  it("should save the new balance following a transaction", function() {
    account.deposit(300)
    expect(account.transactions[0].balance).toEqual(300);
  });

});
