// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of this project?',
      name: 'Project Title',
    },
    {
      type: 'input',
      message: 'Please enter a description of the project',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      name: 'Installation',
    },
    {
     type: 'input', 
     message: 'Provide Instructions and examples for use. Include screenshots as needed.',
     name: 'Usage',
    },
    {
        type: 'input', 
        message: 'List your collaborators, if any, with links to their github profiles',
        name: 'Credits'
    }
    {
      type: 'list',
      choices: ['MIT', 'Apache License 2.0', 'Mozilla Public License 2.0'],
      message: 'Which license is being used for the application?',
      name: 'License',
    },
    {
     type:'input',
     message: 'If you created an application or package and would like other developers to contribute, please enter instructions here on how to do so.', 
     name: 'Contribution', 
    },
    {
     type: 'input', 
     message: 'What is your github username?',
     name: 'Questions',
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