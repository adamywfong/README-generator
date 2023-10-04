// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMD = require('./utils/generateMarkdown');

// Array of questions for user input
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

// Function to write README on initializing app
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
                name: 'contributing',
            },
            {
                type:'input',
                message: questions[5],
                name: 'tests',
            },
            {
                type: 'list',
                message: questions[6],
                name: 'license',
                choices: ['MIT', 'Apache', 'GPL', 'MPL','ISC', 'None'],
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
            fs.writeFile('README.md', markDown, (err) =>
               err ? console.error(err) : console.log('Success!'))
            });
}   

// Function call to initialize app
init();
