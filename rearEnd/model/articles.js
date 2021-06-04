let mongoose = require('../lib/connect.js');

let Schema = mongoose.Schema;

let articleSchema = new Schema({
	title: String,
	content: String,
	label: String,
	frequency: Number,
	time: Date,
	author: String,
	flag: Number,
	likes: Number
})

module.exports = mongoose.model('articles', articleSchema);
