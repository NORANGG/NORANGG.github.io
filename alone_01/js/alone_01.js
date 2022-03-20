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
      $('nav .depth01>li').on('click', function(){   /*nav .depth01>li 를 클릭 했을때*/
          if($('nav').hasClass('on')) {   /*만약 nav에 on이 붙었으면*/
              $('.sub_menu').stop().slideUp();   /*섭메뉴는 슬라이드 업되고 (그래야 다른메뉴 눌렀을때 그전에 열린게 닫힘)*/
              $(this).find('.sub_menu').stop().slideToggle();   /*내(this,즉 nav .depth01>li임) 아래에 있는 섭메뉴는 나오게함*/
          }
      });
    });


    $('.m_open').on('click', function(){
      $('nav').toggleClass('on');
      // $('.sns').fadeToggle();                    /*<-toggle은 사라진다, fadetoggle은 나타났다사라진다*/
    });


 $(window).on('resize',function(){   /*윈도우가 리사이즈 될떄 섭메뉴의 스타일이 빠지고 네비의 on이 빠진다*/
        $('.sub_menu').removeAttr('style');
        $('nav').removeClass('on'); 
    });
//------------------------------------------------------------------
});