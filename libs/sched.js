
var utils				= require(__dirname + '/../helper/utils');
var _ 					= require("underscore");
var tasks 				= [];

exports.countdown = function (date, fn) {
	console.log("Added to schedule: ", date);
	var task = {id:utils.random_string(20), fn: fn};
	tasks.push(task);

	tick(task.id, date, function(id){		
		var fin = _.findWhere(tasks, {id: id});
		if(fin && fin.fn){
			fin.fn();
		}
	});
};

function tick(id, date, callback) {
	var interval = setInterval(function (){
		var currentDate = new Date();

		// console.log("currentDate: ", currentDate);
		// console.log("targetDate: ", date);

		
		if(currentDate >= date){
			console.log("currentDate: ", currentDate);
			console.log("targetDate: ", date);
			callback(id);
    		clearInterval(interval);
    		delete currentDate;
		} else if (date == undefined || date == null || date == "Invalid Date"){
			console.log("Invalid date");
    		clearInterval(interval);
    		delete currentDate;
		}
	}, 1000);
}