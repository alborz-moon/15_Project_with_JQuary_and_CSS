$(document).ready(function(){
    $('.toast-close').click(function(){
        var parent = $(this).parent('.toast');
        parent.fadeOut();
        $(this).remove();
    });
    // $('.toast').delay(5000).fadeOut('slow',function(){
    //     $(this).remove();
    // });
})
