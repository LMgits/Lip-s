var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var xiangqingRouter = require('./routes/xiangqing');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var apiRouter = require('./routes/api');
var personalRouter = require('./routes/personal');
var findRouter = require('./routes/find');
var tianjiaRouter = require('./routes/tianjia');
var gouwuRouter = require('./routes/gouwu');
var xingxiRouter = require('./routes/xingxi');
var chaRouter = require('./routes/cha');
var goumaiRouter = require('./routes/goumai');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/login', loginRouter);
app.use('/xiangqing', xiangqingRouter);
app.use('/register', registerRouter);
app.use('/personal', personalRouter);
app.use('/api', apiRouter);
app.use('/find', findRouter);
app.use('/tianjia', tianjiaRouter);
app.use('/gouwu', gouwuRouter);
app.use('/xingxi', xingxiRouter);
app.use('/cha', chaRouter);
app.use('/goumai', goumaiRouter);

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
