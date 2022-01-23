require('dotenv').config();
const { Octokit } = require('octokit');

async function getUsername(accessToken) {
	const octokit = new Octokit({ auth: accessToken });

	const { data } = await octokit.rest.users.getAuthenticated();
	const username = data.login;

	return username;
}

module.exports = getUsername;
