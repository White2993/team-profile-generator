let inquirer = require("inquirer");
let Engineer = require("./engineer");
let Manager = require("./manager");
let Intern = require("./intern")

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your id?",
      name: "id"
    },
    {
      type: "input",
      message: "What is your Office Number?",
      name: "officeNumber"
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email"
    }
  ])
  .then(answers => {
    //let manager = new Manager(officeNumber);
    console.log(answers)
    })
   /* .prompt(['Name', 'Id', 'Role', 'Github Username', 'Email'], function(err, result) {
      let engineer = new Engineer(gitHub);
       console.log(`The information of ${this.name} has been added to the roster.`)
    })
      .prompt(['Name', 'Id', 'Role', 'School', 'Email'], function(err, result){
        let intern = new Intern(school);
    
      }) */
