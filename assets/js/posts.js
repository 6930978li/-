$(function(){
    var pageSize = 4,pageNum = 1
    function init(obj){
        $.ajax({
            type:'get',
            url:'/getPostList',
            data:{
                pageSize,
                pageNum,
                ...obj
            },
            dataType:'json',
            success:function(res){
                if(res.code==200){
                $('tbody').html(template('fenlei',res.data))
                setPage(Math.ceil(res.data.cnt/ pageSize))
             
            }
            
            }
        });
    }
    init()
    function setPage(total) {
        $(".pagination").bootstrapPaginator({
        
            bootstrapMajorVersion: 3,
            currentPage: pageNum,
            
            totalPages: total,
            
            onPageClicked: function (event,originalEvent,type,page) {
             
                pageNum = page
                var obj = {
                    cate:$('.cateSelector').val(),
                    statu:$('.statuSelector').val()
                }
                init(obj)
            }
        })
    }
    $.ajax({
        type:'get',
        url:'/getCateList',
        dataType:'json',
        success:function(res){
            let html='<option value="all">所有状态</option>'
            res.data.forEach(value=>{
                html+=`<option value="${value.id}">${value.name}</option>`
            })
           /*  console.log(html); */
            
            $('.cateSelector').html(html)
        }
    })
    $('.btn-search').on('click',function(){
        /* console.log($('.cateSelector').val()); */
        var obj = {
            cate:$('.cateSelector').val(),
            statu:$('.statuSelector').val()
        }
        pageNum=1
        /* console.log(obj); */
        
        init(obj)

    })

    $('.userSize').on('change',function(){
        pageSize = $(this).val()
        init()
    })
})