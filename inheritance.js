class Animal{
  eat() {
    console.log('eat bones')
  }
}
class Dog extends Animal{
  bark() {
    console.log('barking')
  }
}
const dog = new Dog();
dog.eat();
dog.bark()