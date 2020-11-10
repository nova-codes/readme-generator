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

  

`;
}

module.exports = generateMarkdown;
