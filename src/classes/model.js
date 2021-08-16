import Car from "./car";

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

export default Model;
