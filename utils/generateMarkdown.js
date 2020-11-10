// function to generate markdown for README
function generateMarkdown(userInput, userInfo) {
  let defaultContents = `## Table of Contents`;

  if(userInput.installation !== '') {
    defaultContents += `* [Installation](#installation)`
  };

  if(userInput.usage !== '') {
    defaultContents += `* [Usage](#usage)`
  };

  if(userInput.contributing !== '') {
    defaultContents += `* [Contributing](#contributing)`
  };

  if(userInput.testing !== '') {
    defaultContents += `* [Testing](#testing)`
  };

  return `
  # ${userInput.title}

  ## Description
  ${userInput.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)
  * [License](#license)
  * [Author](#author)

  ## Installation
  ${userInput.installation}

  ## Usage
  ${userInput.usage}

  ## Contributing
  ${userInput.contributing}

  ## Testing
  ${userInput.testing}

  ## License
    ${userInput.license === "GNU AGPLv3" ? "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)" : userInput.license === "Apache License 2.0" ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : userInput.license === "MIT License" ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : userInput.license === "Boost Software License" ? "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)" : "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"}


  ## Author
  ![Github Profile Picture](${userInfo.avatar_url})

  ## Questions?
  For questions about this repository, please contact me on Github: [@${userInfo.login}](${userInfo.url}])

`;
}

module.exports = generateMarkdown;
