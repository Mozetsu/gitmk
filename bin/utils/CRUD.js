require('dotenv').config();
const { Octokit } = require('octokit');
const chalk = require('chalk');

const octokit = new Octokit({ auth: process.env.TOKEN });

// CREATE
async function add({ name, description, private, license }) {
	await octokit.request('POST /user/repos', {
		name,
		description,
		private,
		auto_init: true,
		license_template: license,
	});
	console.log(`\n${chalk.blue(`[${name}]`)} has been created.\n`);
}

// DELETE
async function remove({ owner, name: repo }) {
	await octokit.rest.repos.delete({ owner, repo });
	console.log(`\n${chalk.blue(`[${repo}]`)} has been deleted.\n`);
}

module.exports = { add, remove };
