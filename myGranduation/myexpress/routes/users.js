var express = require('express');
var router = express.Router();
var MyModel = require('../model/reactmodel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
  var result = {
    code : 0,
    message :''
  }
  MyModel.find({username:req.body.username}, function (err, docs) {
    // docs.forEach
    if(err||docs.length != 0){
      result.code = 901;
      result.message = '用户名已存在' 
      res.send(result);
      return;
    }
    const instance = new MyModel();
    instance.username = req.body.username;
    instance.password = req.body.password;
    instance.save(function (err) {
      if(err){
        result.code=902;
        result.message='注册失败'
        res.send(result);
      }else{
        result.code=900;
        result.message='注册成功'
        res.send(result)
      }
    });
  });
 
});
router.post('/login', function(req, res, next) {
  var result = {
    code : 0,
    message :'',
    name : ''
  }
  MyModel.find({username:req.body.username,password:req.body.password}, function (err, docs) {
    // docs.forEach
    if(err||docs.length == 0){
      result.code = 801;
      result.message = '用户名或密码不正确' 
      
    }else{
      req.session.username=req.body.username;
      result.code = 800;
      result.name = req.body.username;
      result.message = '登陆成功'
    }
    res.send(result);
   
  });
 
});

module.exports = router;
