
  # README.md Generator

  View a demo of this application on youtube, [here](https://youtu.be/DK6bFY-h6Ig). 

  ## Description
  When creating an open source project on GitHub, it is important to have a quality README with information about the app—what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

  This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project.

  ## Installation
  In your preferred terminal, you will need to run `npm install` in order to install the following package dependencies as specified in the package.json file.

    * [inquirer](https://www.npmjs.com/package/inquirer) - this will prompt the user for input from the terminal or command line.
    * [axios](https://www.npmjs.com/package/axios) to fetch user information from the Github API.

  Once the packages above are installed, the application can be run with the command:

  `node index.js`

  ## Usage
  When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your GitHub and about your project.

  The application then takes your responses and uses axios to fetch your GitHub profile from the GitHub API , including your GitHub profile information. From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don’t answer the optional questions, such as Installation for example, an Installation section will not be included in your README). The README will also include badges for your GitHub repo. Fs.writeFile is used to generate your project’s README.md file.

  ## Questions?
  For questions about this repository, please contact me on Github: [@nova-codes][https://api.github.com/users/nova-codes]

