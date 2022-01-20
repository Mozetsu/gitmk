require('dotenv').config();
const { Octokit } = require('octokit');
const chalk = require('chalk');

const octokit = new Octokit({ auth: process.env.TOKEN });

// CREATE
async function add({ name, description, private, license }) {
	// Check for access token env variable
	if (process.env.TOKEN === undefined) {
		console.log(`\n${chalk.red('Error:')} Access token missing.\n`);
		return console.log('Run "gitmk config" and provide the config file.\n');
	}

	try {
		await octokit.request('POST /user/repos', {
			name,
			description,
			private,
			auto_init: true,
			license_template: license,
		});

		return console.log(`\n${chalk.blue(`[${name}]`)} has been created.\n`);
	} catch (error) {
		return console.log(`\n${chalk.red(`${'Error:'}`)} ${error.response.data.message}.\n`);
	}
}

// DELETE
async function remove({ name: repo }) {
	// Check for username env variable
	// return console.log(process.env.USER);
	if (!process.env.USER) {
		console.log(`\n${chalk.red('Error:')} Username missing.\n`);
		return console.log('Run "gitmk config" and provide the config file.\n');
	}

	try {
		await octokit.rest.repos.delete({ owner: process.env.USER, repo });
		return console.log(`\n${chalk.blue(`[${repo}]`)} has been deleted.\n`);
	} catch (error) {
		return console.log(`\n${chalk.red(`${'Error:'}`)} ${error.response.data.message}.\n`);
	}
}

module.exports = { add, remove };
