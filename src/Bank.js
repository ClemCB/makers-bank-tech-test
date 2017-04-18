(function(exports) {

  function Bank() {
    this.accounts = []
  };

  Bank.prototype.createAccount = function(string) {
    this.accounts.push(new Account(string));
  }

  Bank.prototype.accountChecker = function(accountName) {
    for (var i = 0; i < this.accounts.length; i ++) {
      if (accountName === this.accounts[i].accountHolder) {
        return this.accounts[i];
      } else {
        throw "This account does not exist"
      }
    }
  }

  Bank.prototype.checkBalance = function(accountName) {
    try {
      return this.accountChecker(accountName).balance;
    } catch(err) {
      return err;
    };
  }

  Bank.prototype.deposit = function(accountName, amount) {
    try {
      checkAmount(amount);
      this.accountChecker(accountName).makeTransaction("credit", amount);
      return "Deposit of £" + amount + " successfully made";
    } catch(err) {
      return err;
    };
  }

  Bank.prototype.withdraw = function(accountName, amount) {
    try {
      checkAmount(amount);
      this.accountChecker(accountName).makeTransaction("debit", amount);
      return "Withdraw of £" + amount + " successfully made";
    } catch(err) {
      return err
    };
  }

  Bank.prototype.viewStatement = function(accountName) {
    try {
      return this.accountChecker(accountName).viewStatement();
    } catch(err) {
      return err
    };
  }

  function checkAmount(amount) {
    if (amount % 1 !== 0) {
      throw "Deposit/withdrawal amount is not a number"
    }
  }

  exports.Bank = Bank;

})(this);
