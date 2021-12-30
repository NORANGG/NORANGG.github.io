$(function(){
//---------------------------------------------------------------
$(window).on('scroll', ()=>{            /*<()=>이게 펑션 대신쓰는거*/
    let sct=$(window).scrollTop();
    sct > 0 ? $('#header').addClass('on') : $('#header').removeClass('on');
});



$('.main_slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    arrows:false,
    fade:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:true,
});

$('.main_slider figure').eq(0).addClass('on');
$('.main_slider').on('afterChange', function(e,s,c){
    $('.main_slider figure').eq(c).addClass('on').siblings().removeClass('on');
});



$('.pr_slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    arrows:false,
    centerMode:true,
    centerPadding:'100px',
    slidesToShow:3,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:false,
});

$('.pr_slider figure').eq(0).addClass('on');
$('.pr_slider').on('afterChange', function(e,s,c){
    $('.pr_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
});













//---------------------------------------------------------------
})