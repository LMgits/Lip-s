var express = require('express');
var router = express.Router();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
router.post('/', function (req, res){
	var nams = req.body.usrename;
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db('lip');
    var whereStr = {"type":'true'};
    dbo.collection(nams).find(whereStr).toArray(function(err, result) {
        if (err) throw err;
       	res.json(result);
        db.close();
    });
});
})
module.exports = router;