$(function(){
//------------------------------------------------------------------
  
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:10000,
        pauseOnHover:false,
        fade:true,
    });



    $('.mopen').on('click', function(){
        $(this).toggleClass('on');
        $('nav').toggleClass('on');
        $('.mopen .xi-apps').toggleClass('on');
        $('.mopen .xi-close').toggleClass('on');
    });



    $('nav>ul>li>a').on('click', function(){
        if($('nav').hasClass('on')) {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub_menu').slideUp();  
        }
    });



    $('.con02_slide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        slidesToShow: 4,
        slidesToScroll : 4,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll : 2,
              }
            },
    
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll : 2,
                }
              },
    
    
    
          ]
        
    });

    $('#content_02 .btn i.xi-angle-left').on('click', function(){  
        $('.con02_slide').slick('slickPrev')
    });
    
    $('#content_02 .btn i.xi-angle-right').on('click', function(){
        $('.con02_slide').slick('slickNext')
    });   



    $(function(){
        $('.tab_meun>li').on('click', function(){
            var $this= $(this);
            var idx= $(this).index(); 
            $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
            $this.addClass('on').siblings().removeClass('on');
        });
    });
//------------------------------------------------------------------
});