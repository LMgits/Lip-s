var express = require('express');
var router = express.Router();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
var url = "mongodb://localhost:27017/";
router.post('/', function (req, res){
		var nams = req.body.shu;
	    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	    if (err) throw err;
	    var dbo = db.db('lip');
	    if(req.body.id){
	    	var _id = objectId(req.body.id);
	    	console.log(_id)
	    	dbo.collection(nams).remove({'_id':_id})
	    	res.send();
	    }else{
	    	var whereStr = {"type":'false'};
	    	dbo.collection(nams).find(whereStr).toArray(function(err, result) {
		        if (err) throw err;
		       	res.json(result);
		       	db.close();
	    	});
	    } 
});
})
module.exports = router;