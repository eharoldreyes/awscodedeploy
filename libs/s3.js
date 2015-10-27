var AWS 			= require('aws-sdk'); 
var config 			= require(__dirname + '/../config/config').aws;
var configuration	= {
	accessKeyId: config.access_key_id, 
	secretAccessKey: config.secret_access_key, 
	region: config.s3.region
};
AWS.config.region 	= config.s3.region;
AWS.config.update(configuration);
module.exports 		= new AWS.S3({ params: { Bucket: config.s3.bucket } });