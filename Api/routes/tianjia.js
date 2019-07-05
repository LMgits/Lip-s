var express = require('express');
var router = express.Router();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
router.post('/', function (req, res){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	    if (err) throw err;
	    var dbo = db.db("lip");
   		var names = req.body.shu;
   		dbo.collection(names).insertOne({
   			'name':req.body.name,
   			'img':req.body.img,
   			'jiage':req.body.jiage,
   			'shuliang':req.body.shuliang,
   			'type':req.body.type
   		});
   		res.send(); 
    });
});
module.exports = router;