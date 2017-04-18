(function(exports) {

  function Account(name) {
    this.balance = 0;
    this.accountHolder = name;
    this.transactions = [];
  };

  Account.prototype.makeTransaction = function(transaction_type, amount) {
    this.adjustBalance(transaction_type, amount)
    var transaction = {
      date: (new Date()).toDateString(),
      [transaction_type] : amount,
      balance : this.balance
    }
    this.transactions.push(transaction)
  };

  Account.prototype.viewStatement = function() {
    var fullStatement = "date || credit || debit || balance"
    this.transactions.forEach(function(transaction) {
      fullStatement += ("\n" + transaction.date + " || " + transaction.credit + " || " + transaction.debit + " || " + transaction.balance)
      fullStatement = fullStatement.replace("undefined", " ")
    });
    return fullStatement;
  }

  Account.prototype.adjustBalance = function (transaction_type, amount) {
    return (transaction_type === "credit") ? this.balance += amount : this.balance -= amount;
  };

  exports.Account = Account;

})(this);
