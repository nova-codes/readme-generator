// require
const fs = require('fs');
const inquire = require('inquirer');
const generateMarkdown = require('utils/generateMarkdown.js');

// array of questions for user
const questions = [

    {
        name: 'username',
        type: 'input',
        message: 'Please enter your Github username without the preceding @.',
        default: '',
        validate: validInput
    },
    {
        name: 'title',
        type: 'input',
        message: 'Please enter the Title for your project.',
        default: 'Project Title',
        validate: validInput
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please enter a brief description of your project.',
        default: 'This is a brief project description.',
        validate: validInput
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Please enter the installation guidelines for this project.',
        default: '',
        validate: validInput
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Please enter the usage information for your project.',
        default: '',
        validate: validInput
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Please enter the contribution guidelines for your project.',
        default: '',
        validate: validInput
    },
    {
        name: 'testing',
        type: 'input',
        message: 'Please enter the testing instructions for your project',
        default: '',
        validate: validInput
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please select the appropriate license for your project',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    }

];

function validInput(answer) {
    // validate the user input
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
