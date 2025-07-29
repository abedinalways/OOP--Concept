class BankAccount {
  #balance = 0;

  constructor(owner, accountNumber) {
    this.owner = owner;
    this.accountNumber = accountNumber;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log('❌ Amount must be positive.');
      return;
    }
    this.#balance += amount;
    console.log(`✅ Deposited: $ ${amount}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('❌ Insufficient balance.');
    } else {
      this.#balance -= amount;
      console.log(`✅ Withdrawn: $ ${amount}`);
    }
  }

  getBalance() {
    console.log(`💰 Current Balance: $ ${this.#balance}`);
    return this.#balance;
  }

  accountInfo() {
    console.log(
      `👤 Owner: ${this.owner} | 🔢 Account No: ${this.accountNumber}`
    );
  }
}

const myAccount = new BankAccount('Abedin Shahin', '1010101');
myAccount.accountInfo();
myAccount.getBalance();
myAccount.deposit(500);
myAccount.withdraw(100);
myAccount.getBalance();
myAccount.withdraw(1000);
myAccount.deposit(-100);
