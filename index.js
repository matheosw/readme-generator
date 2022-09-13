
const inquirer = require('inquirer')
const fs = require('fs');
// const generationMarkdown = require("./util/generateMarkdown");


const questions = [
    {
        type: 'input',
        message:'whats the title of the project',
        name: 'title',
        
    },
    {
        type: 'input',
        message:'whats the description of the project',
        name: 'description',
        
    },
    {
        type: 'input',
        message:'whats the installation of the project',
        name: 'installation',
        
    },
    {
        type: 'input',
        message:'whats the usage information of the project',
        name: 'usage information',
        
    },
    {
        type: 'list',
        choices:['Boost', 'Creative commons', 'Apache', 'GNU', 'Mozilla'],
        message:'whats the licences for the project',
        name:'licences',
        
    },
    {
        type: 'input',
        message:'whats the contribution guidelines of the project',
        name: 'contribution guidelines',
        
    },
    {
        type: 'input',
        message:'whats the test guidelines of the project',
        name: 'test instructions',
        
    },
    {
        type: 'input',
        message:'whats your github username',
        name: 'username',
        
    },
    {
        type: 'input',
        message:'whats your email adress',
        name: 'email',
        
    },
]

function init(){
inquirer.prompt(questions)
.then((response) => writeToFile(response.fileName, response)
  );
}

function writeToFile(fileName, data) {
   
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
       err ? console.error("error") : console.log("well done"))
   }
   
   
   
   // Function call to initialize app
   init();



// function writeToFile(fileName, data){
//     fs.writeFile(fileName, data, function(err)){
//         console.log(fileName)
//         console.log(fileName)
//         if (err) {
//             return  console.log(err)
//         } else {
//             console.log("it works")
//         }
//     }
// }

// init();



// // function to run it
// function init(){
//     inquirer.prompt(questions)
//     .then(function(data){
//         writeToFile("README.md", generationMarkdown(data));
//         console.log(data)
//     })
    
