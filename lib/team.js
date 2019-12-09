let inquirer = require("inquirer");
let Engineer = require("./engineer");
let Manager = require("./manager");
let Intern = require("./intern")

var employeebool = true


if (employeebool) {
inquirer
  .prompt([
    {
      message: "What is your name?",
      name: "name"
    },
    {
      message: "What is your id?",
      name: "id"
    },
    {
      message: "What is your Office Number?",
      name: 'officeNumber'
    },
    {
      message: "What is your title?",
      name: "title"
    }
  ])
  .then(answers => {
    let manager = new Manager(answers);
    inquirer.prompt([
      {
        type: "confirm",
        message: "Would you like to add new employee?",
        name: "repeat"
      }
    ]).then(returnVal => {
      if(returnVal.repeat === false) {
        employeebool = false;
      }
    })
  })
}


   /* .prompt(['Name', 'Id', 'Role', 'Github Username', 'Email'], function(err, result) {
      let engineer = new Engineer(gitHub);
       console.log(`The information of ${this.name} has been added to the roster.`)
    })
      .prompt(['Name', 'Id', 'Role', 'School', 'Email'], function(err, result){
        let intern = new Intern(school);
    
      }) */
