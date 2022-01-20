require('dotenv').config();
const { Octokit } = require('octokit');
const chalk = require('chalk');

const octokit = new Octokit({ auth: process.env.TOKEN });

async function remove({ owner, name: repo }) {
	await octokit.rest.repos.delete({ owner, repo });
	console.log(`\n${chalk.blue(`[${repo}]`)} has been deleted.\n`);
}

module.exports = remove;
