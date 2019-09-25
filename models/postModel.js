const mysql = require('mysql')
// 创建连接对象

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'albx',
    /* dateStrings: true, */
});




module.exports = {
    getPostList(query, callback) {
        console.log(query);

        let sql = `SELECT posts.*,users.nickname,categories.name
        FROM posts
        JOIN users on posts.user_id=users.id
        JOIN categories on category_id=categories.id
        where 1=1`
        if (query.cate && query.cate != 'all') {//判断用户选择了的分类  所有拼接SQL语句
            sql += `and posts.category_id='${query.cate}'`
        }
        if (query.statu && query.statu != 'all') {//判断用户是否选择了状态条件  
            sql += `and posts.staus='${query.statu}'`

            //order by id DESC是SQL语句里面的倒序
        }
        sql += ` order by posts.id DESC    
       limit ${(query.pageNum - 1) * query.pageSize},${query.pageSize}`  //获得总页数的sql的语句

        connection.query(sql, (err, results) => {
            if (err) {
                callback(err)
            }
            else {
                sql = 'select count(*) as cnt from posts where 1=1 '
                if (query.cate && query.cate != 'all') {//判断用户选择了的分类  所有拼接SQL语句
                    sql += `and posts.category_id=${query.cate}`
                }
                if (query.statu && query.statu != 'all') {//判断用户是否选择了状态条件  
                    sql += `and posts.staus='${query.statu}'`

                    //order by id DESC是SQL语句里面的倒序
                }
                connection.query(sql, (err2, results2) => {
                    if (err2) {
                        callback(err2)
                    }
                    else {
                        /*  console.log(results2); */

                        callback(null, { data: results, cnt: results2[0].cnt })
                    }
                })
                // callback(null,results)
            }
        })

    },
    addPost(obj, callback) {
        console.log(obj);
        /* let sql = 'insert into posts set ?' */
        let sql = `insert into posts values (null,'${obj.slug}','${obj.title}','${obj.feature}','${obj.created}','${obj.content}','${obj.views}','${obj.likes}','${obj.status}','${obj.user_id}','${obj.category_id}')`
        connection.query(sql, obj, (err) => {

            console.log(sql);

            if (err) {
                callback(err)
            }
            else {
                callback(null)
            }
        })

    },
    getPostById(id, callback) {
        var sql = 'select * from posts where id=' + id
        connection.query(sql,(err, results) => {
            if (err) {
                callback(err)
            }
            else {
                callback(null, results[0])
            }


        })
    },
    editPost(obj,callback) {
        console.log(obj);
        
        let sql = 'update posts set ? where id = ?'
      
      
      
        connection.query(sql, [obj,obj.id], (err) => {
            if (err) {
                console.log(err);
                
                callback(err)
                
            }
            else {
                callback(null)
            }

        })
    }

}