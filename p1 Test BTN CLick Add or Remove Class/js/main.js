
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({        
        rtl:true,
        items:4,
        margin:0,
        nav:true,
        dots:false,
        autoplay:false,
        autoplaytimesout:5000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            },
        }
    });
  });
//   $(document).ready(function(){
//     $(".click").click(function(){
//         $(".custom-hide-jquary").hide();
//     });
    
//   });
  $(document).ready(function(){
    $(".click").on({
        click: function() {
           $(".custom-hide-jquary").css("color","green");
        },
        mouselrave: function() {
            $(".custom-hide-jquary").css("color","red");
         },
         dblclick: function() {
            $(".custom-hide-jquary").css("color","blue");
         },
    });
    $(".custom-click-toggle").click(function(){
        $(".custom-hide-jquary").toggle();
    });
  });
// btn info
$(document).ready(function(){
    $(".btnmsgbox").click(function(){
        alert("my text is :" + $(".test1").html());
        // console.log("value is :" + $("input").val());
        $(".test1").text("goodby");
        $('.input').attr({
            'type':'password',
            'class' : 'test2'
        });
    });
});
$(document).ready(function(){
    $(".btnappend").click(function(){
        $('ul').append('<li>متن آزمایشی </li>');
    });
    $(".btnprepend").click(function(){
        $('ul').prepend('<li>منو</li>');
    });
    $(".btnafter").click(function(){
        $('ul').after('<li>بعد از</li>');
    });
    $(".btnbefore").click(function(){
        $('ul').before('<li>قبل از</li>');
    });
    $(".btnremove").click(function(){
        $('ul').remove();
    });
    $(".btnempty").click(function(){
        $('ul').empty();
    });
    
});
$(document).ready(function(){
    $('.addclass').click(function(){
        $('.text3').addClass('custom-addclass')
        $('.tcenter').addClass('tcenter1')
    });
    $('.removeclass').click(function(){
        $('.text3').removeClass('custom-addclass')
        $('.tcenter').removeClass('tcenter1')
    });
    $('.toggleclass').click(function(){
        $('.text3').toggleClass('custom-addclass')
        $('.tcenter').toggleClass('tcenter1')
    });
});
$(document).ready(function(){
    $('.accrodion > li > div').click(function(){
       if($(this).next().is(':hidden')){
           $('.accrodion ul').slideUp();
       }
    });
    $('.accrodion ul:eq(0)').show();
});
