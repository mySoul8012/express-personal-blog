let adminsModel = require("../model/admins.js")
const assert = require("assert");

let admin = new adminsModel({
    userName: "admin",
	userPassword: "admin",
	lastTime: new Date(new Date().getTime() + 28800000),
	createTime: new Date(new Date().getTime() + 28800000),
	flag: 1
})
admin.save((err) => {
    if(err){
        reject(err);
        return;
    }
})
