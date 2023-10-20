
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{
  name: 'title',
  type: 'input',
  message: 'Enter Project Title to Continue',

},
{
  name: 'description',
  type: 'input',
  message: 'Enter your description to continue',

}, {
  name: 'installation',
  type: 'input',
  message: 'Enter your installation instruction to continue',
},
{
  name: 'usage',
  type: 'input',
  message: 'Enter your Usage Information to continue',

},
{
  name: 'contri',
  type: 'input',
  message: 'Enter your contributor to continue',

},
{
  name: 'test',
  type: 'input',
  message: 'OPTIONAL | Enter your Test to continue | Press Enter to Skip',
},
]

inquirer
  .prompt([
    questions[0],questions[1],questions[2],questions[3],questions[4],questions[5]
  ])
  .then((response) => {
    console.log(response)
    // writeToFile("README.md", generateMarkdown(response))
    if (response.test=='') {
      delete questions.test
      console.log("User skipped test")
    }

  })
  // .prompt([
  //   questions[2],questions[3]
  // ]);

;

//* add type, name, and message for each question
//* add questions:  added readme sections (description, usage, license, etc)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}
// TODO: Create a function to initialize app
function init() { }
// Function call to initialize app
init();
//* use inquiter to display questios to user
//* call generateMarkdown funcoin on the data collected
//* take what is returned to us, then pass it to the writeToFile funciton


