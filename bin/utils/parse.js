function parseArguments(argv, allowedArgs) {
	const allowed = {};
	allowedArgs.filter((argument) => {
		// Add all the arguments passed by the user
		// to the allowed object
		if (argv[argument] !== undefined) {
			allowed[argument] = argv[argument];
		}
	});
	return allowed;
}

module.exports = parseArguments;
