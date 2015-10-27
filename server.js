if (!Number.prototype.trim) {
    Number.prototype.trim = function () {
        return this;
    };
}
if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function (str) {
		return this.indexOf(str) === 0;
	};
}
if(!Array.prototype.contains){
    Array.prototype.contains = function(element){
        return this.indexOf(element) > -1;
    };
}

var config          = require(__dirname + "/config/config");
var routes   		= require(__dirname + "/config/router");
var logger          = require(__dirname + "/libs/logger");
var cors 			= require(__dirname + "/libs/cors");

var bodyParser      = require("body-parser");
var morgan 			= require("morgan");
var response_time 	= require("response-time");
var method_override = require("method-override");
var express         = require("express");
var session         = require("express-session");
var AWS 			= require('aws-sdk');
var app             = express();
var router          = routes(express.Router(), logger);

app.use(cors("*"));
app.use(morgan("dev", {immediate : true}));
app.use(response_time());
app.use(method_override());
app.use(bodyParser.urlencoded({extended: false, defer: true}));
app.use(bodyParser.json());
app.use('/documentation', express.static(__dirname + '/doc'));
app.use(router);
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: new session.MemoryStore(),
    key: "express.sid"
}));
app.set("server_port", config.port);
app.listen(app.get("server_port"));

logger.log("info", "Initializing server. ENV = ", process.env["NODE_ENV"]);
logger.log("info", "Listening Server on port : ", app.get("server_port"));

module.exports = app;