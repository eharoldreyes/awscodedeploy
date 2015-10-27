var OpenTok = require('opentok');
var config = require(__dirname + '/../config/config').opentok;
module.exports = new OpenTok(config.apiKey, config.apiSecret);