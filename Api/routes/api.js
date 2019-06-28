var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/car', { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log('数据库连接失败');
  } else {
    console.log('数据库连接成功');
    // 监听http请求
  }
});
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/api', function(req, res, next) {
   res.send('respond with a resource');
});

module.exports = router;
