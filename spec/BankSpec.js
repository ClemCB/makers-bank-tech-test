describe("Bank", function() {
  var bank;
  var account;

  beforeEach(function() {
    bank = new Bank();
    account = new Account("name");
    bank.createAccount("name")
  });

  it("has an array to store accounts opened", function() {
    expect(bank.accounts.constructor.name).toEqual('Array');
  });

  it("stores accounts objects array (testing object)", function() {
    expect(bank.accounts[0].constructor.name).toEqual('Account');
  });

  it("stores accounts objects array (testing array length)", function() {
    expect(bank.accounts.length).toEqual(1);
  });

  it("returns a customer balance", function() {
    expect(bank.checkBalance("name")).toEqual(0);
  });

  it("returns a message if an account does not exist", function() {
    expect(bank.checkBalance("notname")).toEqual("This account does not exist");
  });

  describe("transactions", function() {

    it("confirms to users their deposit has been successful", function() {
      expect(bank.deposit("name", 300)).toEqual("Deposit successfully made");
    });

    it("confirms to users their withdrawal has been successful", function() {
      expect(bank.withdraw("name", 200)).toEqual("Withdraw successfully made");
    });
  });

  describe("statement", function() {

    beforeEach(function() {
      bank.deposit("name", 1000);
      bank.withdraw("name", 500);
    });

    it("displays a user's full banking history", function() {
      expect(bank.viewStatement("name")).toEqual("date || credit || debit || balance" + "\n" +"Tue Apr 18 2017 || 1000 ||   || 1000" + "\n" + "Tue Apr 18 2017 ||   || 500 || 500");
    });

  });
});
