let adminModel = require("../model/admins.js");

function userLogin(userName, userPassword){
	return new Promise(function(resolve, reject){
		adminModel.find({userName: userName}, (err, docs) => {
			if(err){
				console.log(err);
				return;
			}
			if(docs[0].userPassword == userPassword){
				resolve(true);
			}else{
				resolve(false);
			}
		})
	})
}

module.exports = userLogin