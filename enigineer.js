class Engineer extends Employee {
  constructor(gitHub) {
    this.gitHub = gitHub
  }
  getGithub() {
    this.gitHub
  }
  getRole() {
    return "Engineer"
  }
}

module.exports.Engineer

