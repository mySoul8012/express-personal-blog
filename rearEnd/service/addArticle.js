let articleModel = require("../model/articles.js");


function addArticle(title, content, label, author){
	return new Promise(function(resolve, reject){
		let article = new articleModel({
			title: title,
			content: content,
			label:label,
			frequency: 1,
			time: new Date(new Date().getTime() + 28800000),
			author: author,
			flag:1,
			likes: 0
		})
		article.save((err) => {
			if(err){
				reject(err);
				return;
			}
		})
		resolve(true);
	})
}

module.exports = addArticle;