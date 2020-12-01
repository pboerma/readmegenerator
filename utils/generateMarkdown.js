// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    
${data.badges}
${data.url}
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)


## Installation
To install the necessary dependencies, run ${data.install} on the commnand line.


## Usage
${data.usage}


## License
${data.licenseType}


## Contributing
${data.contribute}


## Tests
To test the project, run ${data.tests} on the command line.
## Final Product
A video demo of my project: ${data.product}
## Questions
If you have any questions please email me at ${data.contact}.
## Credits
${data.credits}
`;
}
  
  
  module.exports = generateMarkdown;
  