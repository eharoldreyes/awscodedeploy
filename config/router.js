

module.exports = function(router, logger) {
	var logRequest = function (req, res, next) {
		logger.log("verbose", "Agent", req.get("User-Agent"));
		logger.log("verbose", "Address", req.headers["x-forwarded-for"] || req.connection["remoteAddress"]);
		logger.log("verbose", "Method", req.method);
		logger.log("verbose", "Params", req.params);
		logger.log("verbose", "Query", req.query);
		logger.log("verbose", "Body", req.body);
		next();
	};
	router.all(		"*"								, logRequest);
	router.all(		"*", function (req, res) {
		res.status(404).send({error: true, message : "Page not found."});
	});
	return router;
};