require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var mo = require('./model/user_model')
var path = require('path');
var client = require('redis').createClient({
  host : process.env.HOST,
  port : 5902,
  password: process.env.REDIS_PASSSWORD
});
client.on('connect', err => {
  console.log('Error ' + err);
console.log(client.connected)
});
const mongoose = require('mongoose')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// hello world
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
mongoose.set('useCreateIndex', true);
const uri =  process.env.MONGO_DB_URL
mongoose.connect(uri,  {
  "auth": {
    "authSource": "admin"
  },
  "user": process.env.MONGO_USER,
  "pass": process.env.MONGO_PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true
},function(err) {
  if (err) throw err;
  console.log(err);
});

app.use(cookieParser());
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
let ss = new mo({title:"asdfasdf"})
ss.save()
module.exports = app;
