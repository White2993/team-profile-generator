let Employee = require('./employee.js')

class Manager extends Employee {
  constructor(answers) {
    super(answers.name, answers.id, answers.title);
    this._officeNumber = answers.officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this._officeNumber;
  }
}

module.exports = Manager