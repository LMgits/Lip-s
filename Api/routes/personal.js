var express = require('express');
var router = express.Router();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
router.get('/', function (req, res){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("lip");
    var whereStr = {"series":req.body.usrename};  // 查询条件
    dbo.collection("indexgoods").find(whereStr).toArray(function(err, result) {
        if (err) throw err;
       	res.json(result);
        db.close();
    });
});
})
router.get('/', function (req, res){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("lip");
    var whereStr = {"series":req.body.usrename};  // 查询条件
    dbo.collection("indexgoods").find(whereStr).toArray(function(err, result) {
        if (err) throw err;
        console.log(result)
       	res.json(result);
        db.close();
    });
});
})
module.exports = router;
