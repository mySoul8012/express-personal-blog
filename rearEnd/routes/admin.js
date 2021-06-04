var express = require('express');
var router = express.Router();
let userArticleList = require("../service/userArticleList.js")
let addArticle = require("../service/addArticle.js")
let findArticleDetails = require("../service/findArticleDetails.js")
let updateIdArticle = require("../service/updateIdArticle.js")


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 前端用户读取文章列表
router.get('/userArticleList', (req, res, next) => {
	userArticleList().then((resUserArticleList) => {
		res.json(resUserArticleList);
		res.end();
	})
})

// 文章新增
router.post("/addArticle", (req, res, next) => {
	var params = req.body
	let title = params.title;
	let content = params.content;
	let label = params.label;
	let author = params.author;
	addArticle(title,content, label, author).then((resAddArticle) => {
		res.json(resAddArticle);
		res.end();
	})
})

// 前端用户根据ID返回文章详情
router.get("/findArticleDetails", (req, res, next) => {
	let _id = req.query.id;
	findArticleDetails(_id).then((resFindArticleDetails) => {
		res.json(resFindArticleDetails);
		res.end();
	})
})

// 根据ID更新文章内容
router.post("/updateIdArticle", (req, res, next) => {
	let params = req.body;
	let id = params.id;
	let title = params.title;
	let content = params.content;
	let label = params.label;
	let author = params.author;
	console.log(id);
	updateIdArticle(id, title, content, label, author).then((resUpdateIdArticle) => {
		res.json(resUpdateIdArticle);
		res.end();
	})
})


module.exports = router;