(function(exports) {

  function Account(name) {
    this.balance = 0;
    this.accountHolder = name;
    this.transactions = []
  };

  Account.prototype.deposit = function(amount) {
    this.addTransaction("credit", amount)
    return this.balance += amount;
  }

  Account.prototype.withdraw = function (amount) {
    this.addTransaction("debit", amount)
    return this.balance -= amount;
  };

  Account.prototype.addTransaction = function(transaction_type, amount) {
    var transaction = {
      date: (new Date()).toDateString(),
      [transaction_type] : amount,
      balance : this.calculateBalance(transaction_type, amount)
    }
    this.transactions.push(transaction)
  };

  Account.prototype.calculateBalance = function(transaction_type, amount) {
    if (transaction_type === "credit") {
      return this.balance + amount;
    } else {
      return this.balance - amount;
    }
  };

  Account.prototype.viewStatement = function() {
    var fullStatement = "date || credit || debit || balance"
    this.transactions.forEach(function(transaction) {
      fullStatement += ("\n" + transaction.date + " || " + transaction.credit + " || " + transaction.debit + " || " + transaction.balance)
    });
    return fullStatement;
  }

  exports.Account = Account;

})(this);
