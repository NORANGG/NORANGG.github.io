$(function(){
//------------------------------------------------------------------
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        fade:true,
        dots:false,
    });
    


    $('#content_03 .slider>div').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
        vertical:true,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
            }
          },
    
          {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            },
    
    
    
        ]
      
      });




    $(function(){
      $('nav .depth01>li').on('click', function(){   
          if($('nav').hasClass('on')) {   
              $('.sub_menu').stop().slideUp();   
              $(this).find('.sub_menu').stop().slideToggle();   
          }
      });
    });


    $('.m_open').on('click', function(){
      $('nav').toggleClass('on');
      // $('.sns').fadeToggle();                    
    });


  $(window).on('resize',function(){   
        $('.sub_menu').removeAttr('style');
        $('nav').removeClass('on'); 
    });
//------------------------------------------------------------------
});