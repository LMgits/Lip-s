var express = require('express');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/zhao',{useNewUrlParser:true},function(err){
	if(err){
		console.log('连接失败');
	}else{
		console.log('连接bbb成功')
	}
})
let car_scheam   = mongoose.Schema({
	name:String,
})
const Cat = mongoose.model('Cat',car_scheam);
var router = express.Router();
router.get('/',function(req,res,next){	
	Cat.find({},function(err, doc){ 
	    if(err) {
	        console.log(err.message)
	    }else{
	        console.log(doc)
			res.json(doc);
	    }})
		
})
module.exports = router

