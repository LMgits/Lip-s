var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27018/blog', { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log('数据库连接失败');
  } else {
    console.log('数据库连接成功');
    // 监听http请求
    app.listen(8081);
  }
});
