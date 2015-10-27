/**
 * Created by haroldreyes on 8/23/15.
 */
var validator	= require(__dirname + '/../helper/validator');
var multer      = require("multer");

var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            if (validator.isImage(file)) {
                cb(null, __dirname + '/../tmp/uploads/images');
            } else if (validator.isVideo(file)) {
                cb(null, __dirname + '/../tmp/uploads/videos');
            } else if (validator.isAudio(file)) {
                cb(null, __dirname + '/../tmp/uploads/sounds');
            } else {
                cb(new Error("Invalid file format."));
            }
        }, filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + "." + file.originalname.substr(file.originalname.lastIndexOf('.') + 1));
        }
    }
);

module.exports = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if(validator.isImage(file) || validator.isVideo(file) || validator.isAudio(file)){
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});