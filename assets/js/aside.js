$(function(){
    let str=location.href;
    let routername='';
    let index=str.indexOf('?');
    if(index !=-1){
        routername=str.substring(str.lastIndexOf('/')+1,index)
    }
    else{
        routername=str.substring(str.lastIndexOf('/')+1)
    }

    let menuPosts=$('#menu-posts');
    if(routername=='posts'||routername=='post-add'||routername=='categories'){
        menuPosts.addClass('in');
        menuPosts.attr('aria-expaned',true);
        menuPosts.siblings('a').removeClass('collapsed');

    }

    let menuSettings=$('#menu-settings');
    if(routername=='slides'||routername=='nav-menus'||routername=='settings'){
        menuSettings.addClass('in');
        menuSettings.attr('aria-expaned',true);
        menuSettings.siblings('a').removeClass('collapsed');
    }
    $('#'+routername).addClass('active')
})  
