(function(exports) {

  function Account(name) {
    this.balance = 0;
    this.accountHolder = name;
    this.transactions = [];
  };

  Account.prototype.makeTransaction = function(transaction_type, amount) {
    this.adjustBalance(transaction_type, amount)
    var transaction = {
      date: formatDate(new Date),
      [transaction_type] : amount,
      balance : this.balance
    }
    this.transactions.push(transaction)
  };

  Account.prototype.viewStatement = function() {
    fullStatement = "date || credit || debit || balance"
    this.modifyTransactionsForView()
    return fullStatement;
  }

  Account.prototype.modifyTransactionsForView = function() {
    this.transactions.forEach(function(transaction) {
      fullStatement += ("\n" + transaction.date + " || " + transaction.credit + " || " + transaction.debit + " || " + transaction.balance)
      fullStatement = fullStatement.replace("undefined", " ")
    });
  }

  Account.prototype.adjustBalance = function (transaction_type, amount) {
    return (transaction_type === "credit") ? this.balance += amount : this.balance -= amount;
  };

  function formatDate(date) {
    var day = date.getUTCDate()
    var month = (date.getMonth() + 1)
    var year = date.getUTCFullYear()
    return day + "/" + month + "/" + year
  }

  exports.Account = Account;

})(this);
