#! /usr/bin/env node
const yargs = require('yargs');
const chalk = require('chalk');
const inquirer = require('inquirer');

const prompt = require('./utils/prompt');
const config = require('./utils/config');
const { add, remove } = require('./utils/crud');
const flags = require('./utils/flags');
const parseArguments = require('./utils/parse');

const argv = yargs
	.command('add', 'Creates remote repository.', flags.add)
	.command('rm', 'Deletes remote repository.', flags.remove)
	.command('config', 'Configure username and access token.', flags.config)
	.help()
	.alias('help', 'h').argv;

// Configure username and access token
if (argv._.includes('config')) {
	return inquirer
		.prompt(prompt)
		.then((answers) => {
			config(answers);
		})
		.catch((error) => {
			if (error.isTtyError) {
				// Prompt couldn't be rendered in the current environment
			} else {
				// Something else went wrong
			}
		});
}

// Repo name missing
if (!argv.name) {
	return console.log(`\n${chalk.red('Error:')} Repository name required.\n`);
}

if (argv._.includes('add')) {
	const repoArgs = parseArguments(argv, ['name', 'description', 'private', 'license']);
	add(repoArgs);
}

if (argv._.includes('rm')) {
	const repoArgs = parseArguments(argv, ['name']);
	remove(repoArgs);
}
