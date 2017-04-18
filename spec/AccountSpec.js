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

  describe("deposits", function() {

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

  describe("withdrawals", function() {

    beforeEach(function() {
      account.deposit(300);
    });

    it("should add a transaction to the array when a customer makes a withdrawl", function() {
      account.withdraw(300)
      expect(account.transactions.length).toEqual(2);
    });

    it("should save details of the transaction when a customer makes a deposit", function() {
      account.withdraw(300)
      expect(account.transactions[1].debit).toEqual(300);
    });

    it("should save the time of a deposit", function() {
      account.withdraw(300)
      expect(account.transactions[1].date).toEqual("Tue Apr 18 2017");
    });

    it("should save the new balance following a transaction", function() {
      account.withdraw(300)
      expect(account.transactions[1].balance).toEqual(0);
    });

  });

  describe("statements", function() {

    beforeEach(function() {
      account.deposit(500);
      account.withdraw(300)
    });

    it("returns full history of transactions from the user account", function() {
      expect(account.viewStatement()).toEqual("date || credit || debit || balance" + "\n" +"Tue Apr 18 2017 || 500 || undefined || 500" + "\n" + "Tue Apr 18 2017 || undefined || 300 || 200");
    });

  });
});
