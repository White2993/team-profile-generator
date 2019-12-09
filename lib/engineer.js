let Employee = require('./employee.js')

class Engineer extends Employee {
  constructor(gitHub) {
    super();
    this._gitHub = gitHub;
  }
  getGithub() {
    return this._gitHub;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer

