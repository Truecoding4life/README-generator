
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = inquirer
  .prompt([
    {name: 'title',
      type: 'input',
      message: 'Enter Project Title to Continue',
      
    },
    {
        name: 'description',
      type: 'input',
      message: 'Enter your description to continue',
      
    },
    {
        name: 'choices',
        type: 'list',
        message: 'Select next section to add to your README:',
        choices: [ "Features", "Usage", "User Interface", ]
      },
  ])


.then((response) => {
    const choice = response.choices;
            if(choice == "Feature"){
                                console.log("User Selected Features")
            }
            if(choice== "Usage"){
                                    console.log("User Selected Usage")
            }

            if(choice== "User Interface") {
                    console.log("User Selected Interface")
            }
    });
//   .then((response) => {
//     console.log(response)
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   }
  ;

//* add type, name, and message for each question
//* add questions:  added readme sections (description, usage, license, etc)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
//* use FS module to write data and fileName to readme file
}
// TODO: Create a function to initialize app
function init() {}
// Function call to initialize app
init();
//* use inquiter to display questios to user
//* call generateMarkdown funcoin on the data collected
//* take what is returned to us, then pass it to the writeToFile funciton