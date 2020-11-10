// require
const fs = require('fs');
const inquire = require('inquirer');
const generateMarkdown = require('utils/generateMarkdown.js');

// array of questions for user
const questions = [

    {
        name: 'username',
        type: 'input',
        required: true,
        message: 'Please enter your Github username without the preceding @.',
        default: '',
        error: 'You must enter a valid Github Username.',
        validate: validInput
    },
    {
        name: 'title',
        type: 'input',
        required: true,
        message: 'Please enter the Title for your project.',
        default: 'Project Title',
        error: 'Your project title must be longer than 5 characters',
        validate: validInput
    },
    {
        name: 'description',
        type: 'input',
        required: true,
        message: 'Please enter a brief description of your project.',
        default: 'This is a brief project description.',
        error: 'Your project description must be longer than 5 characters.',
        validate: validInput
    },
    {
        name: 'installation',
        type: 'input',
        required: false,
        message: 'Please enter the installation guidelines for this project.',
        default: ''
    },
    {
        name: 'usage',
        type: 'input',
        required: false,
        message: 'Please enter the usage information for your project.',
        default: ''
    },
    {
        name: 'contribution',
        type: 'input',
        required: false,
        message: 'Please enter the contribution guidelines for your project.',
        default: ''
    },
    {
        name: 'testing',
        type: 'input',
        required: false,
        message: 'Please enter the testing instructions for your project',
        default: ''
    },
    {
        name: 'license',
        type: 'list',
        required: false,
        message: 'Please select the appropriate license for your project',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    }

];

function validInput(answer) {
    // validate the user input
    if(questions[required] === true && answer < 5) {
        return console.log(error);
    }
    else {
        return console.log('Success! Your README.md file has been created.')
    }
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
