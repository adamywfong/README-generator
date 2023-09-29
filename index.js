// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquierer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    'What is the name of your project?',
    'Enter a short description for you project',
    'What are the installation intructions?',
    'What usage information is needed for this project?',
    'What are the contribution guidelines for this project?',
    'What are the test instructions for this project?',
    'Choose a license for your application: ',
    'What is your GitHub username?',
    'What is your email address?',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
            type: 'input',
            message: questions[0],
            name: 'title',
            },
  ])
}

// Function call to initialize app
init();
