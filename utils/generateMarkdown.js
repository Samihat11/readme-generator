// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![badge](https://img.shields.io/badge/${data.license}-license-blue)

## Description

${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

 ${data.usage}

## License

![badge](https://img.shields.io/badge/${data.license}-license-blue)

This application is covered by the ${data.license} License. 

## Contributing

${data.contributors}

## Tests

${data.test}

## Questions

If you have any questions, reach out to me via:

GitHub: [${data.username}](https://github.com/${data.username})

Email: [${data.email}](mailto:${data.email})


`;
}

module.exports = generateMarkdown;
