// TODO: Include packages needed for this application
//remember to run "npm init -y" to initialize the node packet manager in 
//order to install the npm packages required.
//Then do npm install before importing any packages.
//To install packages: "npm i inquirer", and "npm i fs".
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input

    const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's your project title?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What's your project description?"
    },
    {
        type: 'input',
        name: 'installation',
        message: "What command should the user run to install dependencies?",
        default: "npm i "
    },
    {
        type: 'input',
        name: 'usage',
        message: "Describe how to use your project.",
    },
    {
        type: 'list',
        name: 'license',
        message:'Select which license your project will use.',
        choices: ['none','Apache 2.0', 'Boost 1.0', 'MIT', 'MPL 2.0']
    },
    {
        type: 'input',
        name: 'contributions',
        message: "How will other developers contribute to your project?",
    },
    {
        type: 'input',
        name: 'test',
        message: "What command should the user enter to run tests?",
    },
    {
        type: 'input',
        name: 'username',
        message: "Enter your GitHub Email address.",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your GitHub email address.",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, err => {
            err ? console.error(err) : console.log('File created!');
        })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => { 
        const markDown = generateMarkdown(answers)
        writeToFile("./demo.md",markDown)
    })
    
}

// Function call to initialize app
init();
