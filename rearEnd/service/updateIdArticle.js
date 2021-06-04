let articleModel = require("../model/articles.js");


function updateIdArticle(id, title, content, label, author){
	return new Promise(function(resolve, reject){
		articleModel.update({"_id": id}, {title: title, content: content, label: label, author:author, time: new Date(new Date().getTime() + 28800000)}, {multi: true}, (err, docs)=>{
			resolve(docs);
		})
	})
}

module.exports = updateIdArticle