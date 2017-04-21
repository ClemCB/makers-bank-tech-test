(function(exports) {

  function Bank() {
    this.accounts = []
  };

  Bank.prototype.createAccount = function(string) {
    this.accounts.push(new Account(string));
  }

  Bank.prototype.checkBalance = function(accountName) {
    try {
      this.accountChecker(accountName)
      return this.selectUserAccount(accountName).balance;
    } catch(err) {
      return err;
    };
  }

  Bank.prototype.deposit = function(accountName, amount) {
    try {
      this.accountChecker(accountName)
      checkAmount(amount);
      this.selectUserAccount(accountName).makeTransaction("credit", amount);
    } catch(err) {
      return err;
    };
  }

  Bank.prototype.withdraw = function(accountName, amount) {
    try {
      this.accountChecker(accountName)
      checkAmount(amount);
      this.selectUserAccount(accountName).makeTransaction("debit", amount);
    } catch(err) {
      return err
    };
  }

  Bank.prototype.viewStatement = function(accountName) {
    try {
      this.accountChecker(accountName)
      return this.selectUserAccount(accountName).viewStatement();
    } catch(err) {
      return err
    };
  }

  Bank.prototype.selectUserAccount = function (accountName) {
    for (var i = 0; i < this.accounts.length; i ++) {
      if (accountName === this.accounts[i].accountHolder) {
        return this.accounts[i];
      }
    }
  };

  Bank.prototype.accountChecker = function(accountName) {
    var search = false;
    for (var i = 0; i < this.accounts.length; i ++) {
      if (accountName === this.accounts[i].accountHolder) {
        search = true;
      }
    }
    if (search !== true) {
      throw "This account does not exist";
    }
    var search = false;
  }

  function checkAmount(amount) {
    if (amount % 1 !== 0) {
      throw "Deposit/withdrawal amount is not a number"
    }
  }

  exports.Bank = Bank;

})(this);
