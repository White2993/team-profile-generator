let Employee = require('./employee.js')

class Manager extends Employee {
  constructor(officeNumber) {
    super();
    this._officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager