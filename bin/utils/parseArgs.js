function parseArguments(argv, allowedArgs) {
	const allowed = {};
	allowedArgs.filter((argument) => {
		if (argv[argument] !== undefined) {
			allowed[argument] = argv[argument];
		}
	});
	return allowed;
}

module.exports = parseArguments;
