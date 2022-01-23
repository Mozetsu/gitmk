const fs = require('fs/promises');
const chalk = require('chalk');
const getUser = require('./user');

async function config({ path }) {
	if (path.length === 0) {
		return console.log(`\n${chalk.red(`${'Error:'}`)} Path cannot be empty.\n`);
	}

	try {
		const token = await fs.readFile(path.toString().trim(), 'utf8');
		const tokenEnv = `TOKEN=${token}`;

		console.log('\nAdding environment variables...\n');

		const user = await getUser(token);
		const userEnv = `USER=${user.toLocaleLowerCase()}`;

		const envData = `${userEnv}\n${tokenEnv}`;

		await fs.writeFile('./.env', envData);

		console.log('GitHub Account: ' + chalk.magenta(`[${user}]`));
		console.log(chalk.green(`\nConfiguration complete.\n`));
	} catch (err) {
		return console.log(`\n${chalk.red(`${'Error:'}`)} File not found.\n`);
	}
}

module.exports = config;
