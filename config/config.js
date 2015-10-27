var	config = {
	testing: {},
	development: {
		env: "development",
		port: 4001,
		main: {
			host: "aotg.crxebe0qbdfi.ap-southeast-2.rds.amazonaws.com",
			port: 4000,
			database: "aotg",
			user: "aotg",
			password: "40Tg2015"
		}
	}
};

!process.env["NODE_ENV"] && (process.env["NODE_ENV"] = "development");
config = config[process.env["NODE_ENV"]];

module.exports = config;