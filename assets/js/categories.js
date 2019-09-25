$(function () {
    function init() {
        $.ajax({
            url: '/getCateList',
            dataType: 'json',
            success: function (res) {

/* console.log(res) */
                if (res.code == 200) {
                    $('tbody').html(template('mulu', res))
                }
            }
        })

    }
    init() //

    //实现分类的的增加
    $('.btnAdd').on('click', function () {
        $.ajax({
            type: 'post',
            url: '/addCate',
            dataType: 'json',
            data: $('form').serialize(),
            success: function (res) {
                if (res.code == 200) {
                    init()
                }//调用分类展示数据
               
                $('.alert-danger >span').text(res.msg)
                $('.alert-danger ').fadeIn(500).delay(2000).fadeOut()
                $('#name').val('')//把新增页面清空
                $('#slug').val('')

            }
        })
    })

    //实现单个删除
    $('tbody').on('click', '.btndel', function () {
        if (confirm('请问您确定要删除吗')) {//交互常识
            let id=$(this).data().id
         $.ajax({
             type:'get',
             url:'/delCateById/?id='+id,
             dataType:'json',
             success:function(res){
                 if(res.code==200){
                     init()
                 }
                $('.alert-danger >span').text(res.msg)
                $('.alert-danger ').fadeIn(500).delay(2000).fadeOut()
             }


         })
        }
    })
    //实现分类目录的编辑
    $('.btnEdit').on('click',function(){
        $.ajax({
            tpye:'post',
            url:'/editCate'
        })

    })

})
