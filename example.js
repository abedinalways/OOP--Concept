class User{
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
class Product{
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
class Order{
  constructor(User, Product) {
    this.User = User;
    this.Product = Product;
  }
  orderDetails() {
   return `${this.User.name} orders ${this.Product.name} and its price ${this.Product.price}`
 }
}
const user1 = new User("shahrin", "shahrin@gmail.com");
const product1 = new Product("mobile", 12000);
const order1 = new Order(user1, product1);
console.log(order1.orderDetails())