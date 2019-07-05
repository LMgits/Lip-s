var express = require('express');
var router = express.Router();
var app = express();
var objectId = require('mongodb').ObjectId;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
router.post('/', function (req, res){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	    if (err) throw err;
	    var names = req.body.shu;
	    var dbo = db.db("lip");
	    var whereStr = {"_id":{$in:[objectId(req.body.id0),objectId(req.body.id1),objectId(req.body.id2),objectId(req.body.id3)]}};
	    	dbo.collection(names).updateOne(whereStr,{$set:{
	    		"type":"true",
	    	}},{multi: true})
	    	res.send('够买成功');
	});
});
module.exports = router;