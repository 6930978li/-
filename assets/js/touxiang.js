$(function(){
    $('#email').on('blur',function(e){
        var value=$(this).val();
        if(!value) return
        $.ajax({
            url:`sculpture&=${e.value}`
        })
       
    })
})