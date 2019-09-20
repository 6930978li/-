var session=require('express-session');
const express=require('express');//引入第三方模块
const app=express();//创建服务器
const router=require('./02.router');
const bodyParser=require('body-parser');//第三方模块
const fs=require('fs');//读取文件模块
app.listen(8899,()=>{
    console.log('http://127.0.0.1:8899');//服务器
  
});
app.use('/assets',express.static('assets'));//处理静态资源
app.use('/uploads',express.static('uploads'));//处理静态资源

app.set('view engine','ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({secret: 'alibaixiu123',	
resave: false, 
saveUninitialized: false,}));
app.use(function(req,res,next){
    if(req.session.isLogin&&req.session.isLogin=='true'||req.url=='/login'||req.url.indexOf('/admin')==-1){
        next();
    }else{
        res.redirect('/login')
    }
});
app.use(router);
