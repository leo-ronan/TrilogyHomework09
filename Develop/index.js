const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address',
    },
    {
        type: 'input',
        name: 'title',
        message: "Enter your project's title",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of the project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['Apache 2.0', 'BSD 3', 'GNU', 'MIT', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter command to install dependencies',
        default: 'npm install --save',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter command to run tests',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter any relevant usage info',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter any relevant contributing info',
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        writeToFile("ReadMe.md", generateMarkdown({...res}));
    });
}

// function call to initialize program
init();
