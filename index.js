// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMD = require('./utils/generateMarkdown');

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
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type:'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type:'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type:'input',
                message: questions[4],
                name: 'contribution',
            },
            {
                type:'input',
                message: questions[5],
                name: 'testing',
            },
            {
                type: 'list',
                message: questions[6],
                name: 'license',
                choices: ['MIT', 'Apache', 'GPL', 'MPL', 'None'],
            },
            {
                type:'input',
                message: questions[7],
                name: 'github',
            },
            {
                type:'input',
                message: questions[8],
                name: 'email',
            },
        ])
        .then((response) =>
            {const markDown = genMD(response);
            fs.writeFile('README-test.md', markDown, (err) =>
               err ? console.error(err) : console.log('Success!'))
            });
}   

// Function call to initialize app
init();
