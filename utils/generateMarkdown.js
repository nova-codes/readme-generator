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

  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userInput.username}/${userInput.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userInput.username}/${userInput.repo}?style=flat&logo=appveyor)
  Check out the badges hosted by [shields.io](https://shields.io/).

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
  ${userInput.license}

  ## Author
  ![Github Profile Picture](${userInfo.avatar_url})

  ## Questions?
  For questions about this repository, please contact me on Github: [@${userInfo.login}][${userInfo.url}]

`;
}

module.exports = generateMarkdown;
