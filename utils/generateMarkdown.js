// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//displays license badge 
function renderLicenseBadge(license){
  if (license === 'none'){
    return ' '
  }else if (license === 'Apache 2.0') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }else if (license === 'Boost 1.0') {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }else if (license === 'MIT'){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if (license === 'MPL 2.0'){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  };
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none'){
    return ' '
  }else {
    return `[License](#license)`
  }
}
//check if user has selected option for license, if so, 
//render link to readme license section.



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{  if (license !== "none") {
    return (
    `## License 
  
    Copyright @ ${license}. All rights reserved.
  
    Licensed under the ${license} license.`
    )
  }
  return ""
  }


//to do: add more data that will be on the readme generated
// TODO: Create a function to generate markdown for README
//this writes the actual readme file and includes the data from the user input in a string literal.
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}


  ## Description 

  ${answers.description}

  ## Table of Contents

  * [Installations](#installations)

  * [Usage](#usage)

  * ${renderLicenseLink(answers.license)}
  
  * [Contributing](#contributing)

  * [Test](#tests)

  * [Questions](#questions)
  
  ## Installations 

  To install dependencies, run these commands:

  \`\`\`
  ${answers.dependencies}
  \`\`\`

  ## Usage 

  ${answers.usage}

  ${renderLicenseSection(answers.license)}

  ## Contributing

  ${answers.contributing}

  ## Tests

  To run tests, run these commands:

  \`\`\`
  ${answers.test}
  \`\`\`

  ## Questions

  For additional questions, contact me at the email provided below. 

  - GitHub: ${answers.username}
  - Email:  ${answers.email}
`;
}

export default generateMarkdown;

