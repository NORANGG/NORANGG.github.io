$(function(){
//-----------------------------------------------------------------
$('.video').YTPlayer({
    videoURL:'https://youtu.be/91tEAhywDck',
    containment:'#main_video',
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false,
}); 

$('#main_video i.xi-pause').on('click', function(){
    $('.video').YTPPause();
});
$('#main_video i.xi-play').on('click', function(){
    $('.video').YTPPlay();
});



$('nav>ul>li>a').on('click', function (){
    if($('#header').hasClass('on')) {                           /*만약 #헤더가 클래스로 on을 갖고있으면*/
        $(this).next().slideToggle();                           /*this는 nav>ul>li>a에서 메뉴01,즉 하나를 지정하는것.this는 02,03도 됨 next(다음것.즉 서브메뉴)를 슬라이드토글한다*/
        $(this).parent().siblings().find('.submenu').slideUp(); /*지정한this의 부모parent의 siblings자식을 find숨긴다(섭메뉴) 슬라이드업해서.*/
    }
});



$('.con01_slide').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:6000,
    pauseOnHover:false,
    slidesToShow: 4,
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

$('#content_01 .btn i.xi-angle-left-thin').on('click', function(){  
    $('.con01_slide').slick('slickPrev')
});

$('#content_01 .btn i.xi-angle-right-thin').on('click', function(){
    $('.con01_slide').slick('slickNext')
});  



$('.con02_slide').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000,
    centerMode:true,
    centerPadding: '60px',
    pauseOnHover:false,
    slidesToShow: 6,
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






    




    $(window).on('resize', function(){
        if($(window).width() > 768) {               /*만약 윈도우가 768보다 크면*/
            $('#header').removeClass('on');         /*#헤더의 on 클래스를 떼고*/
            $('.sub_menu').removeAttr('style')       /*.섭메뉴의 스타일을 뗀다*/
        };
    });



$('.mopen').on('click', function(){
    $('#header').toggleClass('on');
});













//-----------------------------------------------------------------
});