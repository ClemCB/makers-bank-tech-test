"use strict";

describe("Bank", function() {
  var bank;
  var account;

  beforeEach(function() {
    bank = new Bank();
    account = new Account("name");
    bank.createAccount("name")
  });

  it("has an array to store accounts opened", function() {
    expect(bank.accounts.constructor.name).toEqual("Array");
  });

  it("stores accounts objects array (testing object)", function() {
    expect(bank.accounts[0].constructor.name).toEqual("Account");
  });

  it("stores accounts objects array (testing array length)", function() {
    expect(bank.accounts.length).toEqual(1);
  });

  it("returns a customer balance", function() {
    expect(bank.checkBalance("name")).toEqual(0);
  });

  it("stores multiple accounts", function() {
    bank.createAccount("secondname");
    expect(bank.checkBalance("secondname")).toEqual(0);
    expect(bank.accounts[1].accountHolder).toEqual("secondname");
  });

  it("throws an error on account checker if the account does not exist", function() {
    expect(function() {
      bank.accountChecker("notname");
    }).toThrow();
  });

  it("catches the error and returns a message if the account does not exist", function() {
    expect(bank.checkBalance("notname")).toEqual("This account does not exist");
  });

  describe("transactions", function() {

    it("confirms to users their deposit has been successful", function() {
      bank.deposit("name", 300)
      expect(bank.checkBalance("name")).toEqual(300);
    });

    it("confirms to users their withdrawal has been successful", function() {
      bank.withdraw("name", 200)
      expect(bank.checkBalance("name")).toEqual(-200);
    });
  });

  describe("statement", function() {

    beforeEach(function() {
      bank.deposit("name", 1000);
      bank.withdraw("name", 500);
    });

    it("displays a user's full banking history", function() {
      expect(bank.viewStatement("name")).toEqual("date || credit || debit || balance" + "\n" + "1/9/2017 || 1000 ||   || 1000" + "\n" + "1/9/2017 ||   || 500 || 500");
    });
  });

  describe("edge case checks", function() {

    it("checks deposit amount is an integer", function() {
      expect(bank.deposit("name", "potatoes")).toEqual("Deposit/withdrawal amount is not a number");
    });

    it("checks withdrawal amount is an integer", function() {
      expect(bank.withdraw("name", "potatoes")).toEqual("Deposit/withdrawal amount is not a number");
    });
  });
});
