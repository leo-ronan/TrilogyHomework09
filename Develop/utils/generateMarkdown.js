function getLicenseLink(license) {
  if (license == "None") {
    return "";
  }
  else {
    return `\n*[License](#license)\n`;
  }
}

function licenseContainer(license) {
  if (license == "None") {
    return "";
  }
  else {
    return `##License
    Project license: ${license}`;
  }
}

function getLicenseBadge(license) {
  if (license == "None") {
    return "";
  }
  else {
    return `![License](https://img.shields.io/badge/license-${license}-green.svg))`
  }
}

function generateMarkdown(data) {
  return `#Description: ${data.title}
  ${getLicenseBadge(data.license)}

  ##Description
  ${data.description}


  ##Table of Contents

  *[Installation](#installation)

  *[Usage](Usage)
  ${getLicenseLink(data.license)}

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  ##Installation
  Install dependencies in the command line with command: ${data.installation}

  ##Usage
  ${licenseContainer(data.license)}

  ${data.usage}

  ##Contributing
  ${data.contributing}

  ##Tests
  Run tests with command: ${data.test}
  ##Questions
  For specific questions, email me at ${data.email}, or open an issue on my [github](https://www.github.com/${data.github}/). 
  `;
}

module.exports = generateMarkdown;
