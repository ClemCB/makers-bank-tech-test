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

  exports.Bank = Bank;

})(this);
