// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

const inquirer = require('inquirer')
const fs = require('fs');
// const { type } = require('os');

const questions = [
    {
        type: 'input',
        message:'whats the title of the project',
        name: 'title',
        
    }
]

inquirer.prompt(questions)
.then(answers => {
    console.log(answers)
})
.catch(err=> console.log(err))