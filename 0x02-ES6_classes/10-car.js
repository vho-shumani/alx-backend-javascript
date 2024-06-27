const clone = Symbol('clone')
export default class Car {
  constructor(brand, motor, color){
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }
  
  static get [Symbol.species]() {
    return this;
  }

  [clone]() {
    const ModelCar = this.constructor[Symbol.species];
    return new ModelCar();
  }

  cloneCar() {
    return this[clone]();
  }
}