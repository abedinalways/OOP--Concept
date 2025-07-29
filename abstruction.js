class Car {
  startEngine() {
    this.#injectFuel();
    this.#sparkPlugs();
    console.log('Car started');
  }

  #injectFuel() {
    console.log('Fuel injected');
  }

  #sparkPlugs() {
    console.log('Spark created');
  }
}

const car = new Car();
car.startEngine();
// "Fuel injected", "Spark created", "Car started"
// But cannot call #injectFuel() directly
