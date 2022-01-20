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
};

const remove = {
	name: {
		description: 'Repository name',
		alias: 'n',
		type: 'string',
	},
};

module.exports = { add, remove };
