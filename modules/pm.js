import Employee from "./employee.js";

export default class PM extends Employee {
  constructor (id, salary) {
    super (id, salary);
  }
  #jobType = 'PM';
  getJobType() {
    return ' I am ' + this.#jobType;
  }
}