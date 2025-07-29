✅ 1. class BankAccount — (Class ব্যবহার)

class BankAccount { ... }
🔹 এটা হলো OOP-এর মূল কাঠামো — class।
এখানে BankAccount নামে একটি class বানানো হয়েছে, যা দিয়ে অনেকগুলো আলাদা অ্যাকাউন্ট তৈরি করা যাবে।

✅ 2. #balance = 0; — (Encapsulation / Private Property)

#balance = 0;
🔹 # দিয়ে ডেটা private করা হয়েছে।
এই balance প্রোপার্টি class-এর বাইরে থেকে access করা যাবে না। শুধু class-এর ভিতরেই ব্যবহার করা যাবে।
➡️ এটা Encapsulation এর একটি দারুন উদাহরণ।

✅ 3. constructor() — (Object বানানোর সময় ইনিশিয়াল ভ্যালু সেট)

constructor(owner, accountNumber) {
  this.owner = owner;
  this.accountNumber = accountNumber;
}
🔹 যখন কেউ নতুন একটি Account তৈরি করবে, তখন এই constructor চলবে।
এটি অবজেক্টের প্রাথমিক অবস্থা সেট করে — যেমন মালিকের নাম ও অ্যাকাউন্ট নম্বর।

✅ 4. deposit(amount) — (Public Method / Behavior)

deposit(amount) {
  if (amount <= 0) {
    console.log("❌ Amount must be positive.");
    return;
  }
  this.#balance += amount;
  console.log(`✅ Deposited: $${amount}`);
}
🔹 এটা একটি method — অর্থাৎ একটি কাজ যা এই অবজেক্ট করতে পারে।
➡️ এখানে ব্যালেন্সে টাকা জমা করা হয়।
➡️ if (amount <= 0) দিয়ে একটি ভ্যালিডেশন করা হয়েছে — এটি Abstraction এর উদাহরণ। বাইরের ইউজার জানে না ভিতরে কীভাবে balance আপডেট হচ্ছে।

✅ 5. withdraw(amount) — (Method with validation)

withdraw(amount) {
  if (amount > this.#balance) {
    console.log("❌ Insufficient balance.");
  } else {
    this.#balance -= amount;
    console.log(`✅ Withdrawn: $${amount}`);
  }
}
🔹 এটিও একটি behavior — টাকা তুলতে দেয়।
➡️ যদি ব্যালেন্স কম থাকে, তাহলে error দেখায়।
➡️ #balance ব্যবহার করে balance update করে।

✅ 6. getBalance() — (Read private data safely)

getBalance() {
  console.log(`💰 Current Balance: $${this.#balance}`);
  return this.#balance;
}
🔹 বাইরের থেকে balance প্রোপার্টিতে ডিরেক্ট অ্যাক্সেস করা যাবে না, তাই এটা একটা getter method
➡️ এটি Encapsulation অনুযায়ী বাইরের ইউজারকে শুধু অনুমতি দেওয়া হচ্ছে balance দেখতে।

✅ 7. accountInfo() — (Another public method)

accountInfo() {
  console.log(`👤 Owner: ${this.owner} | 🔢 Account No: ${this.accountNumber}`);
}
🔹 এটি একটি simple মেথড যা ইউজার এবং অ্যাকাউন্ট তথ্য দেখায়।

✅ 8. const myAccount = new BankAccount(...) — (Object Creation)

const myAccount = new BankAccount("Abedin Shahin", "1010101");
🔹 এই লাইনটি দিয়ে BankAccount ক্লাস থেকে একটি নতুন অবজেক্ট তৈরি করা হচ্ছে — যার নাম myAccount।

➡️ এটিই হল OOP-এর object instantiation।

✅ 9. Method Calls:

myAccount.accountInfo();
myAccount.getBalance();
myAccount.deposit(500);
myAccount.withdraw(100);
🔹 ইউজার অবজেক্ট তৈরি করার পর তার বিভিন্ন কাজ (behavior) কল করা হচ্ছে:
➡️ deposit
➡️ withdraw
➡️ balance চেক ইত্যাদি

🔑 সংক্ষেপে কোন অংশে কী আছে:
অংশ	উদ্দেশ্য	OOP কনসেপ্ট
class BankAccount	কাঠামো তৈরি	Class
#balance	প্রাইভেট ভ্যারিয়েবল	Encapsulation
constructor()	ইনিশিয়াল ভ্যালু সেট	Object Initialization
deposit()	টাকা জমা	Abstraction + Method
withdraw()	টাকা উত্তোলন	Abstraction + Method
getBalance()	ব্যালেন্স চেক	Safe Access (Encapsulation)
new BankAccount(...)	অবজেক্ট তৈরি	Object