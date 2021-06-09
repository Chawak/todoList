const express=require('express');
const routes = require('./routes/tasks');

const app=express();
const mongoose=require('mongoose')
app.use(express.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
 };
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test', mongooseOptions).catch((err) => {
    console.log('0', err);
    err.then((e) => console.log('0.1', e)).catch((e) => console.log('0.2', e));
  });
app.use('/',routes)
app.listen(3001);