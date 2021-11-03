$(function(){
//---------------------------------------------------------------------------------------
$('#top_banner i').on('click', function(){
    $('#top_banner').slideUp();
});
    
//function topPannerClose(){
//   $('#top_banner').hide();
//} 이런다른방법임! 


$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
});




//---------------------------------------------------------------------------------------
});