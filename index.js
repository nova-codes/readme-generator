// require - external
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util'); 

// require - internal 
const generateMarkdown = require('./utils/generateMarkdown.js');
const github = require('./utils/github-api.js'); 

// array of questions for user
const questions = [

    {
        name: 'username',
        type: 'input',
        message: 'Please enter your Github username.'
    },
    {
        name: 'title',
        type: 'input',
        message: 'Please enter the Title for your project.',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please enter a brief description of your project.',
    
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Please enter the installation guidelines for this project.'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Please enter the usage information for your project.'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Please enter the contribution guidelines for your project.'
    },
    {
        name: 'testing',
        type: 'input',
        message: 'Please enter the testing instructions for your project'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please select the appropriate license for your project',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        else {
            return console.log('Success! README.md file generated.')
        }
    })
};

const aysncWriteFile = util.promisify(writeToFile);

// function to initialize program
async function init() {
    try {
        // inquirer
        const userInput = await inquirer.prompt(questions);
        console.log('Your Responses:', userInput);
        console.log('Fetching Github data . . .');

        // github
        const userInfo = await github.getUser(userInput);
        console.log('Your Github user name is:', userInfo);

        // toss it all in the markdown
        console.log('Generating README.md. Please wait.');
        const markdown = generateMarkdown(userInput, userInfo);
        console.log(markdown);

        // write it to file
        await aysncWriteFile('README.md', markdown);

    }
    catch(err) {
        console.log(err); 
    }
}

// function call to initialize program
init();
