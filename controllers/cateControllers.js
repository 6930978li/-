// 这个文件主要是处理categories表相关的业务
const cateModel=require('../models/cateModel');
module.exports={
    getCateList(req,res){
        cateModel.getCateList((err,data)=>{
            if(err){
                res.json({
                    code:200,
                    msg:'获取数据失败'
                })
            }else{
                res.json({
                    code:200,
                    msg:'获取数据成功',
                    data

                })
            }
        })
    },
    addCate(req,res){
        let obj=req.body
        cateModel.addCate(obj,(err)=>{
            if(err){
                res.json({
                    code:200,
                    msg:'新增分类失败'
                })
            }else{
                res.json({
                    code:200,
                    msg:'新增分类成功',
                })
            }
        })

    },
    delCateById(req,res){
        let id=req.query.id
        cateModel.delCateById(id,(err)=>{
            if(err){
                console.log(err);
                
                res.json({
                    code:200,
                    msg:'删除失败'
                })
            }else{
                res.json({
                    code:200,
                    msg:'删除成功',
                })
            }

        })
    }
}