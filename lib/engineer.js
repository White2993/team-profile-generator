let Employee = require('./employee.js')

class Engineer extends Employee {
  constructor(answers) {
    super(answers.name, answers.id, answers.title);
    this._gitHub = answers.gitHub;
  }
  getGithub() {
    return this._gitHub;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer

