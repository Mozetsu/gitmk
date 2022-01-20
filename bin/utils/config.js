const fs = require('fs/promises');
const chalk = require('chalk');

async function config({ path }) {
	// Check path provided

	try {
		const content = await fs.readFile(path.toString().trim(), 'utf8');
		await fs.writeFile('./.env', content);
		console.log(chalk.green(`\nConfiguration complete.\n`));
	} catch (error) {
		return console.log(`\n${chalk.red(`${'Error:'}`)} ${error}.\n`);
	}
}

module.exports = config;
