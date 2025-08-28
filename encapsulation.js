class BankAccount{
  constructor(owner, balance) {
    this.owner = owner;
    let _balance = balance;
    this.getBalance = function () {
      return _balance;
    }
    this.deposite = function (amount) {
      _balance += amount;
    }
  }
}
const account = new BankAccount("Minhajul", 3000);
console.log(account.getBalance())
account.deposite(4000);
console.log(account.getBalance())