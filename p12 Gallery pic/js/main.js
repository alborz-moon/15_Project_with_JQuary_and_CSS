$(document).ready(function(){
    $('.thumbnails a').click(function(e){
        e.preventDefault();
        $('.image-gallery img').attr('src',$(this).attr('href'))
    })
});
