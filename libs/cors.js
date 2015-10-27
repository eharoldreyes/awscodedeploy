module.exports = function (allowed_origins) {
	return function (req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', allowed_origins);
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Access-Token, User-Agent');
		if (req.method === 'OPTIONS')
			return res.sendStatus(200);
		next();
	};
};