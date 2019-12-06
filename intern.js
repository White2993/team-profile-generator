class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }
  getSchool() {
    this.school
  }
  getRole() {
    return "Intern"
  }
}

module.exports.Intern