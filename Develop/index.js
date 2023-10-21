
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown")

const questions = [{
  name: 'title',
  type: 'input',
  message: 'REQUIRE | Enter Project Title to Continue | .....',
  validate: (data)=>{if(data){return true}else{return "Please enter a title"}}

},
{
  name: 'description',
  type: 'input',
  message: 'REQUIRE | Enter your DESCRIPTION to continue | .....',
  validate: (data)=>{if(data){return true}else{return "Please enter a description"}}
}, {
  name: 'installation',
  type: 'input',
  message: 'OPTIONAL | Enter your INSTALLATION instruction to continue | Enter to skip',
},
{
  name: 'question',
  type: 'input',
  message: 'OPTIONAL | Enter your QUESTION to continue | Enter to skip',
},
{
  name: 'usage',
  type: 'input',
  message: 'OPTIONAL | Enter your USAGE INFORMATION to continue | Enter to skip',

},
{
  name: 'contribution',
  type: 'input',
  message: 'OPTIONAL | Enter your CONTRIBUTOR to continue | Enter to skip',

},
{
  name: 'test',
  type: 'input',
  message: 'OPTIONAL | Enter your TESTING DATA to continue | Enter to skip',
},{
  name: 'license',
  type: 'list',
  message: 'REQUIRE | Choose LICENSES to continue | Enter to skip',
  choices: ['BSD', 'Apache', 'CC0', 'None'],
},

]

inquirer
  .prompt([
    questions[0],questions[1],questions[2],questions[3],questions[4],questions[5],questions[6],questions[7]
    
  ])
  .then((response) => {
    console.log(response)
    writeToFile("README.md", generateMarkdown(response))
    if (response.test=='') {
      delete questions.test
      console.log("User skipped test")
    }

  })

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


