(function(exports) {

  function Account(name) {
    this.balance = 0;
    this.accountHolder = name;
    this.transactions = [];
  };

  Account.prototype.deposit = function(amount) {
    this.makeTransaction("credit", amount)
    return this.balance += amount;
  }

  Account.prototype.withdraw = function (amount) {
    this.makeTransaction("debit", amount)
    return this.balance -= amount;
  };

  Account.prototype.makeTransaction = function(transaction_type, amount) {
    var transaction = {
      date: (new Date()).toDateString(),
      [transaction_type] : amount,
      balance : this.calculateBalance(transaction_type, amount)
    }
    this.transactions.push(transaction)
  };

  Account.prototype.calculateBalance = function(transaction_type, amount) {
    return (transaction_type === "credit") ? this.balance + amount : this.balance - amount;
  };

  Account.prototype.viewStatement = function() {
    var fullStatement = "date || credit || debit || balance"
    this.transactions.forEach(function(transaction) {
      fullStatement += ("\n" + transaction.date + " || " + transaction.credit + " || " + transaction.debit + " || " + transaction.balance)
      fullStatement = fullStatement.replace("undefined", " ")
    });
    return fullStatement;
  }

  exports.Account = Account;

})(this);
