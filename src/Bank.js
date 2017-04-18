(function(exports) {

  function Bank() {
    this.accounts = []
  };

  Bank.prototype.createAccount = function(string) {
    this.accounts.push(new Account(string));
  }

  exports.Bank = Bank;

})(this);
