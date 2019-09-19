//账号登录的
const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'albx'
});
module.exports={
    login(email,callback){
        var sql = `select * from users where email = '${email}'`
        connection.query(sql,(err,result,fields) =>{
           if(err){
               callback(err)
           }
           else{
               callback(null,result[0])
           }
        }
        )}
}