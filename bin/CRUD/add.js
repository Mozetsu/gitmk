require('dotenv').config();
const { Octokit } = require('octokit');
const chalk = require('chalk');

const octokit = new Octokit({ auth: process.env.TOKEN });

async function add({ name, description, private }) {
	await octokit.request('POST /user/repos', {
		name,
		description,
		private,
		auto_init: true,
		license_template: 'MIT',
	});
	console.log(`\n${chalk.blue(`[${name}]`)} has been created.\n`);
}

module.exports = add;
