
const BSD = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
const Apache = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
const CC0 = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'

function renderLicenseBadge(data) {
    if(data.license == 'BSD'){
     return BSD;
    }
    if(data.license == 'Apache'){
      return Apache;
    }
    if(data.license == 'CC0'){
       return CC0;
    }
  }

// function renderLicenseLink(data,everything) {
//   console.log(data,everything);
//   everything = everything + data;

  
// }

// function renderLicenseSection(data) {
 
// }

function generateMarkdown(data) {


  let everything =

  `
  # ${data.title}
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  * [Test](#testing)

----------------
`

if (data.installation!==''){
  console.log("User wrote Installation")
  everything = everything +   `
  ## Installation
  ${data.installation}
  
  
  `
};
if (data.usage!==''){
  console.log("User wrote Usage")
  everything = everything +   `
  ## Usage
  ${data.usage}
  
  
  `
};

if (data.contribution!==''){
  console.log("User wrote contribution")
  everything = everything +   `
  ## Contribution 
  ${data.contribution}
  
  
  `
};


if (data.test!==''){
  console.log("User wrote test")
  everything = everything +   `
  ## Testing
  ${data.test}
  
  
  `
}
if (data.license!=='None' || data.license.choice!==''){
console.log("User chose license")  
everything=everything +renderLicenseBadge(data)
}
return everything;
};
module.exports = generateMarkdown;