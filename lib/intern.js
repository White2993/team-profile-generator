let Employee = require('./employee.js')

class Intern extends Employee {
  constructor(answers) {
    super(answers.name, answers.id, answers.title);
    this._school = answers.school;
  }
  getSchool() {
    return this._school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern