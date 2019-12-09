let Employee = require('./employee.js')

class Intern extends Employee {
  constructor(school) {
    super();
    this._school = school;
  }
  getSchool() {
    return this._school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern