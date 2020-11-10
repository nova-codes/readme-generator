const axios = require('axios');

const githubAPI = {
    async getUser(userInput) {
        try {
            let response = await axios

            .get(`https://api.github.com/users/${userInput.username}`);

            return response.data;
        }
        catch(err) {
            console.log(err);
        }
    }
};

module.exports = githubAPI;