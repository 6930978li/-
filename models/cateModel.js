const mysql = require('mysql')
// 创建连接对象
const connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'albx'
});

module.exports={
    getCateList(callback){
        var sql = `select * from categories`
        connection.query(sql,(err,result) =>{
           if(err){
               callback(err)
           }
           else{
               callback(null,result)
           }
        }
        )},
   addCate(obj,callback){
       let sql='insert into categories set ?'
       connection.query(sql,obj,(err)=>{
        if(err){
            callback(err)
        }
        else{
            callback(null)
        }

       })
   },
   delCateById(id,callback){
   /*     let sql='delete from categories where id = '+id */
   let sql='delete from categories where id = ?'
       connection.query(sql,[id],(err)=>{
        if(err){
            callback(err)
        }
        else{
            callback(null)
        }

       })
   }   
}