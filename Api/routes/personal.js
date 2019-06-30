const mongoose = require('mongoose');
var express = require('express');
var router = express.Router();


mongoose.connect('mongodb://localhost:27017/zhao',{useNewUrlParser:true},function(err){
	if(err){
		console.log('连接失败');
	}else{
		console.log('连接AAA成功')
	}
});
let user_scheam   = mongoose.Schema({
	name: String,
	age: String,
	sex: String,
	tel: String,
	dizhi: String
});
const User = mongoose.model('users',user_scheam);
router.get('/',function(req,res,next){	
	User.find({},function(err, lala){ 
	    if(err) {
	        console.log(err.message)
	    }else{
			res.json(lala);
	    }})
		
})

router.post('/', function(req, res, next) {
	var sss = new User({name:req.body.name,age:req.body.age,sex:req.body.sex,tel:req.body.tel,dizhi:req.body.dizhi})
	sss.save(function(err,ok){
		if(err){
			console.log('1')
		}else{
			console.log('2')
		}
	})
	console.log(sss)
});

module.exports = router;
