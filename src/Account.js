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
    }
  };

  exports.Account = Account;

})(this);

//
// var person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"blue"
// };
