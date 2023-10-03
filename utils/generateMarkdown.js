// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`;
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`;
    case 'GPL':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n`;
    case 'MPL':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n`;
    case 'ISC':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-8A2BE2.svg)](https://opensource.org/license/isc-license-txt/)\n`;
    default:
      return "";
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
    case 'Apache':
      return `https://opensource.org/licenses/Apache-2.0`;
    case 'GPL':
      return `https://www.gnu.org/licenses/gpl-3.0`;
    case 'MPL':
      return `https://opensource.org/licenses/MPL-2.0`;
    case 'ISC':
      return `https://opensource.org/license/isc-license-txt/`;
    default:
      return '';
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  if (license === 'None') {
    return `This project is unlicensed. For questions, refer to the [Questions](#questions) section`;
  } else {
    return `Licenced under the [${license} license](${licenseLink})`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const license = renderLicenseSection(data.license);
  return `# ${data.title}

## Description

${badge}
${data.description}

## Table of Contents

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

${license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

I am on github! [github.com/${data.github}](github.com/${data.github})\n
For additional questions, you can email me at [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
