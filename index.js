// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Would you like to give instructions for using your application?:'
    },
    { //checkbox that allows license choice
      type: 'checkbox',
      name: 'license',
      message: 'Please choose a license.',
      choices: ['GNU AGPLv3', 'GNU GPLv3',
        'GNU LGPLv3', 'Mozilla Public License 2.0',
        'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
        'The Unlicense'],
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List of collaborators, (if any):'
    },
    {
      type: 'input',
      name: 'features',
      message: 'Features of your project (List them here):'
    },
    {
      type: 'input',
      name: 'test',
      message: 'How can someone test this application?:'
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username? (Required)',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Please list time/dates when you are available for contact.',
    } 
  ];
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => {
      if (err) throw err;
      console.log('README.md has been generated');
    });
  }  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    });
  }
  
  // Function call to initialize app
  init();

