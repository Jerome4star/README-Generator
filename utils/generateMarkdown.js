// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
//displays license badge 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
//check if user has selected option for license, if so, 
//render link to readme license section.

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}
//to do: add more data that will be on the readme generated
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return ` ${renderLicenseBadge(answers.license)}
  # ${answers.title}

`;
}

export default generateMarkdown;

