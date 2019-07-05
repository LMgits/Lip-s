var express = require('express');
var router = express.Router();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
router.post('/', function (req, res){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	    if (err) throw err;
	    var dbo = db.db("lip");
	    var whereStr = {"name":req.body.usrename};
	    if(req.body.type == 'true'){  // 查询条件
	    	dbo.collection("user").find(whereStr).toArray(function(err, result){
		        if (err) throw err;
		       	res.json(result);
	    	});
	    }else{
	    	dbo.collection("user").updateOne(whereStr,{$set:{
	    		"age":req.body.age,
	    		"sex":req.body.sex,
	    		"tel":req.body.tel,
	    		"dizhi":req.body.dizhi,
	    		"uen":req.body.uen,
	    	}})
	    	res.send();
	    }
	});
});
module.exports = router;