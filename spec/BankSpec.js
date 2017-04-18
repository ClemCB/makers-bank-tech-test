describe("Bank", function() {
  var bank;
  var account;

  beforeEach(function() {
    bank = new Bank();
    account = new Account("name");
  });

  it("should have an array to store accounts opened", function() {
    expect(bank.accounts.constructor.name).toEqual('Array');
  });

  it("should store accounts objects array (testing object)", function() {
    bank.createAccount("name")
    expect(bank.accounts[0].constructor.name).toEqual('Account');
  });

  it("should store accounts objects array (testing array length)", function() {
    bank.createAccount("name");
    expect(bank.accounts.length).toEqual(1);
  });

  it("should return a customer balance", function() {
    bank.createAccount("name");
    expect(bank.checkBalance("name")).toEqual(0);
  });

  it("should return a message if an account does not exist", function() {
    bank.createAccount("name");
    expect(bank.checkBalance("notname")).toEqual("This account does not exist");
  });

  describe("transactions", function() {

    beforeEach(function() {
      bank.createAccount("name");
    });

    it("should confirm to users their deposit has been successful", function() {
      expect(bank.deposit("name", 300)).toEqual("Deposit successfully made");
    });

    it("should confirm to users their deposit has been successful", function() {
      expect(bank.withdraw("name", 200)).toEqual("Withdraw successfully made");
    });
  });

  describe("statement", function() {

    beforeEach(function() {
      bank.createAccount("name");
      bank.deposit("name", 1000);
      bank.withdraw("name", 500);
    });

    it("should display a user's full banking history", function() {
      expect(bank.viewStatement("name")).toEqual("date || credit || debit || balance" + "\n" +"Tue Apr 18 2017 || 1000 || undefined || 1000" + "\n" + "Tue Apr 18 2017 || undefined || 500 || 500");
    });

  });
});
