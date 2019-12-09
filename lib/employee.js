class Employee {
  constructor(name, id ,title) {
    this._name = name;
    this._id = id;
    this._title = title;
  }
  getName() {
    return this._name;
  } 
  getId() {
    return this._id;
  }
  getEmail() {
    return this._email;
  } 
  getRole() {
    return "Employee";
  }
}

module.exports = Employee