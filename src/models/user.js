var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
	email: {type: String, required: true, unique: true},
	fullname: {type: String, required: true},
	password: {type: String, required: true}
});
schema.plugin(uniqueValidator);

module.exports = mongoose.model('User', schema);