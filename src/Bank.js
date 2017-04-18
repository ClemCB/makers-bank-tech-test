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
      }
    }
  }

  Bank.prototype.checkBalance = function(accountName) {
    if (this.accountChecker(accountName)) {
      return this.accountChecker(accountName).balance;
    } else {
      return "This account does not exist";
    }
  }

  Bank.prototype.deposit = function(accountName, amount) {
    if (this.accountChecker(accountName)) {
      this.accountChecker(accountName).makeTransaction("credit", amount);
      this.accountChecker(accountName).balance += amount;
      return "Deposit successfully made";
    } else {
      return "This account does not exist";
    }
  }

  Bank.prototype.withdraw = function(accountName, amount) {
    if (this.accountChecker(accountName)) {
      this.accountChecker(accountName).makeTransaction("debit", amount);
      this.accountChecker(accountName).balance -= amount;
      return "Withdraw successfully made";
    } else {
      return "This account does not exist";
    }
  }

  Bank.prototype.viewStatement = function(accountName) {
    if (this.accountChecker(accountName)) {
      return this.accountChecker(accountName).viewStatement();
    } else {
      return "This account does not exist";
    }
  }

  exports.Bank = Bank;

})(this);
