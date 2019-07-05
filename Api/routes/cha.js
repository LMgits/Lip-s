var express = require('express');
var router = express.Router();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
var url = "mongodb://localhost:27017/";
router.post('/', function (req, res){
	var nams = req.body.shu;
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	    var dbo = db.db('lip');
	    var whereStr = {"_id":{$in:[objectId(req.body.id0),objectId(req.body.id1),objectId(req.body.id2),objectId(req.body.id3)]}};
			dbo.collection(nams).find(whereStr).toArray(function(err, result) {
	    	 if (err) throw err;
        	res.send(result)
    		});
    });
	   
})
module.exports = router;