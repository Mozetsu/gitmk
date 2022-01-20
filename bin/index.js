#! /usr/bin/env node
const yargs = require('yargs');

const add = require('./CRUD/add');
const remove = require('./CRUD/remove');
const flags = require('./utils/flags');
const parseArguments = require('./utils/parseArgs');

const argv = yargs
	.command('add', 'Creates remote repository', flags.add)
	.command('rm', 'Deletes remote repository', flags.remove)
	.help()
	.alias('help', 'h').argv;

if (!argv.name) {
	return console.log(`\n${chalk.red('Error:')} Repository name required.\n`);
}

if (argv._.includes('add')) {
	const repoArgs = parseArguments(argv, ['name', 'description', 'private', 'license']);
	// Creates remote repository
	add(repoArgs);
}

if (argv._.includes('rm')) {
	const repoArgs = parseArguments(argv, ['name']);
	// Removes remote repository
	remove({owner: "Mozetsu", name: repoArgs.name});
}
