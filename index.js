//external downloads and connecting to Generate Markdown

//
const inquirer = require("inquirer");
var fs = require("fs");

//Axios - Promise based HTTP client for the browser and node.js
var axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");


//These questions will appear once you run this file in terminal with node
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "url",
    message: "What is the URL to the repository?",
  },
  {
    type: "input",
    name: "install",
    message: "How do you install the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description of your project.",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "contact",
    message: "What is your contact information or email?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "How do you test this project?",
    default: "npm test",
  },
  {
    type: "input",
    name: "product",
    message: "Paste a link to a video demo of your project.",
    default: "Video demo coming soon."
  },
  {
    type: "input",
    name: "contribute",
    message: "What are the project contributors?",
  },
  {
    type: "input",
    name: "credits",
    message: "Who or what would you like to acknowledge?",
  },
  {
    type: "list",
    message: "What kind of license do you want your project to have?",
    name: "license",
    choices: ["MIT", "GNU GPLv3", "Unlicense", "None"],
  },
];


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
    console.log("Good news! Your README was generated.");
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    let data = { ...answers };

    const queryUrl = `https://api.github.com/users/${answers.github}`;
    console.log(queryUrl);

    axios
      .get(queryUrl)
      .then(function (response) {
        data.photo = response.data.avatar_url;
        
        console.log(`Combined inputs`, data);
        
        const markdown = generateMarkdown(data);
        writeToFile("README.md", markdown);
      })


      .catch((err) => {
        console.log("Github user not found");

        
      });
  });
}

init();