var express = require('express');
var router = express.Router();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
router.post('/', function (req, res){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	    if (err) throw err;
	    var dbo = db.db("lip");
	    var whereStr = {"name":req.body.usrename};  // 查询条件
	    dbo.collection("user").find(whereStr).toArray(function(err, result) {
	        if (err) throw err;
	       	if(result.length !== 0){
	       		res.send('用户已经被注册');
	       		return;
	       	}else{
	       		var dum = ({
	       			'name':req.body.usrename,
	       			'passw':req.body.usrepasswrod,
	       		})
	       		dbo.collection("user").insert(dum);
	       		var names = req.body.usrename;
	       		dbo.createCollection(names, function(err,res){
	       			if (err) throw err;
	       			db.close();
	       		})
	       		res.send('注册成功');
	       	}
	    });
	});
})
module.exports = router;