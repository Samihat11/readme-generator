// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  { type: "input", name: "title", message: "What is the name of the project?" },
  { type: "input", name: "description", message: "Describe the project:" },
  {
    type: "editor",
    name: "installation",
    message: "Describe how to install the project(if applicable):",
  },
  { type: "editor", name: "usage", message: "What is the project usage for?" },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors to the project(if applicable)?",
  },
  { type: "input", name: "test", message: "Are there any tests included?" },
  {
    type: "list",
    name: "license",
    message: "Choose a license for the project:",
    choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
  },
  { type: "input", name: "username", message: "What is your GitHub username?" },
  { type: "input", name: "email", message: "What is your email address?" },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Your README.md file has been generated");
  });
}
const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
  try {
    // Ask user questions and generate responses
    const userResponse = await inquirer.prompt(questions);
    const markdown = generateMarkdown(userResponse);
    // Write new README.md to
    await writeFileAsync("example/README.md", markdown);
    console.log("README.md has been generated");
  } catch (err) {
    console.log(err);
  }
}

// Function call to initialize app
init();
