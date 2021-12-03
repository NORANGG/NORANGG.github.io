$(function(){
//-----------------------------------------------------------------
    $('.main_visual').slick({
        //arrows:false,
        autoplay:true,
        dots:true,
        prevArrow:'<div class="prev"><i class="xi-arrow-left"></div>',   /*<-arrows버튼 텍스트로 만들기. arrows는 주석처리하고하기*/
        nextArrow:'<div class="next"><i class="xi-arrow-right"></div>',
    });

    $('.main_visual figure').eq(1).addClass('on');
    $('.main_visual').on('afterChange', function(e,s,c){
        $('.main_visual figure').eq(c+1).addClass('on')
        .siblings().removeClass('on');   /*<-피규어중에 몇번째놈(eq) , 시빌롱,리무브 하면 on이 붙었다 떨어졌다함*/
    });



























//-----------------------------------------------------------------
});