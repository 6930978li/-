$(function(){
    //文件上传
    $('#feature').on('change',function(){
        let myfile=$('#feature')[0].files[0]; //对象转DOM元素
        //files就是当前用户选择的文件列表 里面的值是用户选择的文件呢对象
        let formdata = new FormData()
        formdata.append('img',myfile)


        $.ajax({
            type:'post',
            url:'/uploadFile',
            data:formdata, 
            processData:false, // 告诉ajax不要进行数据的处理，因为formdata已经进行处理了
            contentType:false, 
            dataType:'json',
            success:function(res){
                console.log(res);
                
                 if(res.code==200){
                    $('.thumbnail').attr('src','/'+res.img).show()//这个是图片的预览
                    //把当前选择的图片的文件路径存在隐藏域里面
                    $('[name="feature"]').val(res.img.substring(res.img.lastIndexOf('\\')+1))
                      
                 }
            }
        })
    })
    CKEDITOR.replace('content')  //富文本框的初始化 
    let pa = itcast.getParams(location.search)
    $('.btnAdd').on('click',function(){
        CKEDITOR.instances.content.updateElement()
        if(pa.id){
            opt('/editPost')

        }else{
            opt('/addPost')
        }




    function opt(url){
        $.ajax({
            type:'post',
            url,
            data:$('form').serialize(),//获取表单的所有Input元素
            dataType:'json',
            success:function(res){
                if(res.code==200){
                    $('.alert-danger >span').text(res.msg)
                    $('.alert-danger ').show()
                    setTimeout(() => {
                        location.href='/admin/posts'
                    },2000);
                    
                }
            }

        })
    }
        
        
    })
    $.ajax({
        type:'get',
        url:'/getCateList',
        dataType:'json',
        success:function(res){
            let html=''
            res.data.forEach(value=>{
                html+=`<option value="${value.id}">${value.name}</option>`
            })
           /*  console.log(html); */
            
            $('#category_id').html(html)
        }
    })
    if(pa.id){
        $.ajax({
            type:'get',
            url:'/getPostById',
            data:{id:pa.id},
            dataType:'json',
            success:function(res){
                $('#title').val(res.data.title)
                $('#content').val(res.data.content)
                $('#slug').val(res.data.slug)
                $('#category_id').val(res.data.category_id)
                $('#status').val(res.data.status)
                $('.thumbnail').attr('src', '/uploads/' + res.data.feature).show()
                // 存储隐藏域
                $('[name="feature"]').val(res.data.feature)
                // 时间:将之前的日期转换为指定的yyyy-MM-ddThh:mm格式
                $('#created').val(res.data.created)
                // id
                $('[name="id"]').val(res.data.id)
            }
        })
    }
    
})