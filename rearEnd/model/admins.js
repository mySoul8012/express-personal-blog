let mongoose = require('../lib/connect.js');

let Schema = mongoose.Schema;

let adminSchema = new Schema({
	userName: String,
	userPassword: String,
	lastTime: Date,
	createTime: Date,
	flag: Number
})
 
module.exports = mongoose.model('admins', adminSchema);
