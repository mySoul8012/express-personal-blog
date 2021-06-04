let articleModel = require("../model/articles.js");

function userArticleList(){
	 return new Promise(function(resolve, reject){
		articleModel.find({}, (err, docs) => {
			if(err){
				console.log(err);
				return;
			}
			resolve(docs);
		})
	})
}

module.exports = userArticleList;