var express = require('express');
var router = express.Router();
let userArticleList = require("../service/userArticleList.js")
let findArticleDetails = require("../service/findArticleDetails.js")
let userLogin = require("../service/userLogin.js")
const jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 前端用户读取文章列表
router.get('/artileList', (req, res, next) => {
	userArticleList().then((resUserArticleList) => {
		res.json(resUserArticleList);
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

// 用户登录
router.post("/userLogin", (req, res, next) => {
	var params = req.body
    // 获取用户名
    let userName = params.userName;
    let userPassword = params.userPassword;
    // 注意默认情况 Token 必须以 Bearer+空格 开头
  const token =  jwt.sign(
    {
      _id: userName
    },
    'secret12345',
    {
      expiresIn: 3600 * 24 * 3
    }
  )
    // 进行登录验证
    userLogin(userName, userPassword).then((resUserLogin) => {
    	if(resUserLogin){
    		 res.json({
    		 status: 'ok',
   			 data: { token: token }
  			})
    		res.end();
    	}else{
    		res.json({"flag": "false"})
    		res.end();
    	}
    })
})

module.exports = router;
