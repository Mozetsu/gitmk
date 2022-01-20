const add = {
	name: {
		description: 'Repository name',
		alias: 'n',
		type: 'string',
	},
	description: {
		description: 'Repository description',
		alias: 'd',
		type: 'string',
	},
	private: {
		description: 'Repository access',
		alias: 'p',
		type: 'boolean',
		default: false,
	},
	license: {
		description: 'Repository license template',
		alias: 'l',
		type: 'string',
		default: 'MIT',
	},
};

const remove = {
	name: {
		description: 'Repository name',
		alias: 'n',
		type: 'string',
	},
};

const config = {
	user: {
		description: 'Configure username',
		alias: 'u',
		type: 'string',
	},
	token: {
		description: 'Configure access token',
		alias: 't',
		type: 'string',
	},
};

module.exports = { add, remove, config };
