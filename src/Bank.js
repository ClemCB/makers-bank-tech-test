(function(exports) {

  function Bank() {
    this.accounts = []
  };

  Bank.prototype.createAccount = function(string) {
    this.accounts.push(new Account(string));
  }

  Bank.prototype.checkBalance = function(accountName) {
    for (var i = 0; i < this.accounts.length; i ++) {
      if (accountName === this.accounts[i].accountHolder) {
        return this.accounts[i].balance;
      } else {
        return "This account does not exist";
      }
    }
  }

  Bank.prototype.deposit = function(accountName, amount) {
    for (var i = 0; i < this.accounts.length; i ++) {
      if (accountName === this.accounts[i].accountHolder) {
        this.accounts[i].deposit(amount)
        return "Deposit successfully made"
      }
    }
  }

  exports.Bank = Bank;

})(this);
