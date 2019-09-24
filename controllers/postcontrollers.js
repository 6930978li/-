const postModel=require('../models/postModel');
/* var moment=require('moment'); */
module.exports={
    getPostList(req,res){
        let query = req.query
    
     postModel.getPostList(query,(err,data)=>{
         if(err){
             res.json({
                 code:400,
                 msg:'数据查询失败'
             })
         }
         else{
             
             res.json({
                 code:200,
                 msg:'数据查询成功',
                 data
             })
         }
     })


    },
    //新增文件
    addPost(req,res){
        var obj=req.body
        obj.id=null//因为数据库的ID是自动生成的
        obj.views=0//设置默认的阅读次数为零
        obj.likes=0//默认的点赞次数为零
        obj.user_id=req.session.currentUser.id //这个是在登录的时候存在SESSION当中的数据，从中取得ID
        postModel.addPost(obj,(err)=>{
            console.log(obj);
            
            if(err){
                res.json({
                    code:400,
                    msg:'新增失败'
                })
            }
            else{
                res.json({
                    code:200,
                    msg:'新增成功'
                })

            }
        })

        },
        //编辑文件
        getPostById(req,res){
            let id=req.query.id
            postModel.getPostById(id,(err,data)=>{
                
            })
        }

    
    
}
