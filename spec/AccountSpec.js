describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account("name");
   });

  it("is initiated with a 0 balance", function() {
    expect(account.balance).toEqual(0);
  });

  it("is initiated with an account holder name", function() {
    expect(account.accountHolder).toEqual("name");
  });

  it("stores transactions in an array", function() {
    expect(account.transactions.constructor.name).toEqual("Array");
  });

  describe("deposits", function() {

    beforeEach(function() {
      account.makeTransaction("credit", 300)
    });

    it("update balance when a customer makes a deposit", function() {
      expect(account.balance).toEqual(300);
    });

    it("add a transaction to the array when a customer makes a deposit", function() {
      expect(account.transactions.length).toEqual(1);
    });

    it("save details of the transaction when a customer makes a deposit", function() {
      expect(account.transactions[0].credit).toEqual(300);
    });

    it("save the time of a deposit", function() {
      expect(account.transactions[0].date).toEqual("1/9/2017");
    });

    it("save the new balance following a transaction", function() {
      expect(account.transactions[0].balance).toEqual(300);
    });

  });

  describe("withdrawals", function() {

    beforeEach(function() {
      account.makeTransaction("credit", 300);
      account.makeTransaction("debit", 300);
    });

    it("should add a transaction to the array when a customer makes a withdrawl", function() {
      expect(account.transactions.length).toEqual(2);
    });

    it("should save details of the transaction when a customer makes a deposit", function() {
      expect(account.transactions[1].debit).toEqual(300);
    });

    it("should save the time of a deposit", function() {
      expect(account.transactions[1].date).toEqual("1/9/2017");
    });

    it("should save the new balance following a transaction", function() {
      expect(account.transactions[1].balance).toEqual(0);
    });

  });

  describe("statements", function() {

    beforeEach(function() {
      account.makeTransaction("credit", 500);
      account.makeTransaction("debit", 300);
    });

    it("returns full history of transactions from the user account", function() {
      expect(account.viewStatement()).toEqual("date || credit || debit || balance" + "\n" +"1/9/2017 || 500 ||   || 500" + "\n" + "1/9/2017 ||   || 300 || 200");
    });

  });
});
