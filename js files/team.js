let inquirer = require("inquirer");
let engineer = require("./enigineer");
let manager = require("./manager");
let intern = require("./intern")

class Employee {
  constructor(name, id ,title) {
    this.name = name
    this.id = id
    this.title = title
  }
  getName() {

  }
  getEmail() {

  } 
  getRole() {
    
  }
}


inquirer
  .prompt([
    {
      type: 'list',
      message: "team info?",
      choices: ['intern', 'engineer', 'manager']
    }, 
    {
      message: "how many"
    }
  ]).then()