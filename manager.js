class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber
  }
  getRole() {
    return "Manager"
  }
}

module.exports.Manager