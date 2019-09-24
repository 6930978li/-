const formidable=require('formidable');

module.exports={
    uploadFile(req,res){

        //创建上传对象
        let form = new formidable.IncomingForm()
        form.encoding = 'utf-8'
        //配置
        form.uploadDir = './uploads'// 设置文件上传路径
        
        form.keepExtensions = true
        form.parse(req,(err,fields,files)=>{
            if(err){
                res.json({
                    code:400,
                    msg:'文件上传失败'
                })
            }else{
                res.json({
                    code:200,
                    msg:'文件上传成功',
                    img:files.img.path
                })

                
                
            }
        })

    }
}