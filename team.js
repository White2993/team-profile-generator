let inquirer = require("inquirer");
let engineer = require("./enigineer");
let manager = require("./manager");
let intern = require("./intern.js")

class Employee {
  constructor(name, id ,title) {
    this.name = name
    this.id = id
    this.title = title
  }
  getName() {this.name} 
  getId() {this.id}
  getEmail() {this.email} 
  getRole() {this.title}
}

inquirer
  .prompt(['Name', 'Id', 'Office Number', 'Role', 'Email'], function(err, result) {
    
      console.log(`The information of ${this.name} has been added to the roster.`)
  })
    .prompt(['Name', 'Id', 'Role', 'Github Username', 'Email'], function(err, result) {
    
       console.log(`The information of ${this.name} has been added to the roster.`)
    })
      .prompt(['Name', 'Id', 'Role', 'School', 'Email'], function(err, result){

    
      }) 