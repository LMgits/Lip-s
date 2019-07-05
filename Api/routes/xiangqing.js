var express = require('express');
var router = express.Router();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var objectId = require('mongodb').ObjectId;
router.post('/', function (req, res){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("lip");
    var _id = objectId(req.body.usrename);
    var whereStr = {"_id":_id};// 查询条件
    dbo.collection("indexgoods").find(whereStr).toArray(function(err, result) {
        if (err) throw err;
       	res.json(result);
        db.close();
    });
});
})
module.exports = router;