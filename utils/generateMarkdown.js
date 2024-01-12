// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Define an object that maps license names to their corresponding badge URLs
  const licenseBadgeUrls = {
    'GNU AGPLv3': 'https://img.shields.io/badge/License-GNU%20AGPLv3-blue.svg',
    'GNU GPLv3': 'https://img.shields.io/badge/License-GNU%20GPLv3-blue.svg',
    'GNU LGPLv3': 'https://img.shields.io/badge/License-GNU%20LGPLv3-blue.svg',
    'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-blue.svg',
    'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%20License%202.0-blue.svg',
    'MIT License': 'https://img.shields.io/badge/License-MIT-blue.svg',
    'Boost Software License 1.0': 'https://img.shields.io/badge/License-Boost%201.0-blue.svg',
    'The Unlicense': 'https://img.shields.io/badge/License-Unlicense-blue.svg',
  };

  // Define your table of contents with anchor links
  const tableOfContents = `
## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
`;

  // Process the selected license(s)
  const selectedLicenses = Array.isArray(data.license) ? data.license : [data.license];
  
  // Generate license badge(s)
  const licenseBadges = selectedLicenses.map(license => {
    const badgeUrl = licenseBadgeUrls[license];
    return `![License](${badgeUrl})`;
  }).join(' ');

  // Generate the license section
  const licenseSection = selectedLicenses.map(license => {
    return `## License
This project is licensed under the ${license} license.`;
  }).join('\n\n');

  // Generate the README content with the table of contents included
  const readmeContent = `
# ${data.title}

${tableOfContents} // Insert the table of contents here

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

${licenseBadges} // Display license badges

${licenseSection} // Display license sections

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

- GitHub Profile: [${data.username}](https://github.com/${data.username})
- Email: ${data.email}
`;

  return readmeContent;
}

module.exports = generateMarkdown;



