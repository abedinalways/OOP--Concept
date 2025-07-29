## 🔹 OOP কি?
Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects rather than functions or procedures. It emphasizes concepts like modularity, reusability, and scalability, making it easier to design, maintain, and extend software systems. OOP is widely used in languages like Java, C++, Python, and C#.
**OOP (Object-Oriented Programming)** হচ্ছে এমন একটি প্রোগ্রামিং কৌশল, যেখানে কোড লেখা হয় অবজেক্ট বা বস্তুকে ভিত্তি করে। প্রতিটি অবজেক্টের নিজস্ব বৈশিষ্ট্য (properties/attributes) এবং কাজের ধরন (methods/behaviors) থাকে।
1. Encapsulation (এনক্যাপসুলেশন)
এটি ডেটা এবং মেথডকে একত্র করে একটি ইউনিটে রাখা। এর মাধ্যমে ডেটা বাইরের প্রোগ্রাম থেকে সরাসরি অ্যাক্সেস করা যায় না, বরং নির্দিষ্ট পদ্ধতির মাধ্যমে অ্যাক্সেস করতে হয়।

উদাহরণ:
একটি Student ক্লাস আছে যার marks ভ্যালু private রাখা হয়েছে, বাইরে থেকে কেউ সরাসরি এই marks পরিবর্তন করতে পারবে না।
class Student {
  #marks;
  constructor(name, marks) {
    this.name = name;
    this.#marks = marks;
  }

  getMarks() {
    return this.#marks;
  }

  setMarks(newMarks) {
    if (newMarks >= 0 && newMarks <= 100) {
      this.#marks = newMarks;
    }
  }
}
---------------------
 Inheritance (ইনহেরিটেন্স)
একটি ক্লাস থেকে আরেকটি ক্লাস তার বৈশিষ্ট্য এবং ফাংশনালিটি গ্রহণ করতে পারে।

উদাহরণ:
Animal ক্লাস থেকে Dog এবং Cat ইনহেরিট করছে।


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} is speaking`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking`);
  }
}

const dog = new Dog("Tommy");
dog.speak(); // Tommy is speaking
dog.bark();  // Tommy is barking