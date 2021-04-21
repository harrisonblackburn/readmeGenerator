// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of this project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please enter a description of the project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How is the application installed?',
      name: 'installation',
    },
    {
     type: 'input', 
     message: 'How is the application used?',
     name: 'usage',
    },
    {
      type: 'list',
      choices: ['MIT', 'Apache License 2.0', 'Mozilla Public License 2.0'],
      message: 'Which license is being used for the application?',
      name: 'license',
    },
    {
     type:'input',
     message: 'How to contribute', 
     name: 'contribution', 
    },
    {
     type: 'input', 
     message: 'What is your github username?',
     name: 'github',
    },
    {
     type: 'input',
     validate: function(input){
        //  google how to validate email in java and plug in to if statement 
         if (input.length > 6) return true;
         else return "Must be a valid email"
     },
     message: 'What is your email?',
     name: 'email',
    }
  ])
  // resonse is arbitrary
  .then((response) =>{
      console.log(JSON.stringify(response, null, 2));
  }

  
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {




}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();