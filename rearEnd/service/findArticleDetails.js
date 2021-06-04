let articleModel = require("../model/articles.js");


function findArticleDetails(id){
	return new Promise(function(resolve, reject){
		articleModel.find({"_id": id}, (err, docs) => {
			if(err){
				console.log(err);
				return;
			}
			resolve(docs);
		})
	})
}

module.exports = findArticleDetails;