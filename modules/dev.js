import Employee from "./employee.js";

export default class Dev extends Employee {
  constructor (id, salary) {
    super (id, salary);
  }
  #jobType = 'Dev';
  getJobType() {
    return ' I am ' + this.#jobType;
  }
  static returnArrayOfDevs(...objs) {
    const arr = [];
    for (const obj of objs) {
      if ( obj instanceof Dev) {
        arr.push(obj);
      }
    }
    return arr;
  }
}
