$(function(){
//-----------------------------------------------------------------
let sc=$('.section');
let sideBar=$('nav li');   /*<-옆에 네비바(사이드바) on붙였다 떼는거때문에 이름지어줌 nav li는 sideBar이다!*/
$('#main').fullpage({
    anchors:['intro','portfolio_01','portfolio_02','portfolio_03','portfolio_04','portfolio_05','training', 'alone','profile',],              /*풀페이지에서 페이지 번호 정해주기*/
    afterLoad:function(origin, destination, direction){
        let idx=destination.index;                                 /*<-afterLoad가 실행될때 이름을 붙이는거라 안쪽에 넣고 섹션은 매번 해야하니까 바깥쪽에!*/
        sc.eq(idx).addClass("on").siblings().removeClass('on');  /*<-섹션에 on붙였다 떼기*/
        sideBar.eq(idx).addClass("on").siblings().removeClass('on');  /*<-옆에 네비바(사이드바) on붙였다 떼는거*/
        // sct > sTop ? $('.section').addClass('on') : $('.section').removeClass('on');
    },

});



new Typed('.slogan_type',{
    strings: ['brand new design and publishing portfolio by noh hyejin'],
    typeSpeed:50,
});



$('.cover_btn').on('click',function(){
    $('#cover').slideToggle(); /*fadeToggle하면 슈우웅나타남*/
});  



let cloneMenu = $('nav>ul').clone();
$('#cover').append(cloneMenu);  

$('#cover').on('scroll wheel touchmove', function(){
    return false;
});



$('#header .cover_btn i').on('click', function(){
    $('#header .cover_btn i').toggleClass('on');
    $('#header').toggleClass('on');
});



$('#cover ul').on('click', function(){
    $('#header .cover_btn i').toggleClass('on');
    $('#header').toggleClass('on');
    $('#cover').slideUp('on');
});



$('.profile .add i.xi-kakaotalk').on('click', function(){
    $('.profile .add .kakao figure').show('on');
});

$('.profile .add i.xi-github').on('click', function(){
    $('.profile .add .git figure').show('on');
});

$('.profile .add i.xi-close').on('click', function(){
    $('.profile .add figure').hide('on');
});


/*부터 반응형 add*/
$('.profile .me dl .kakao i.xi-kakaotalk').on('click', function(){
    $('.profile .me dl .kakao figure').show('on');
});

$('.profile .me dl .kakao i.xi-close').on('click', function(){
    $('.profile .me dl .kakao figure').hide('on');
});


$('.profile .me dl .git i.xi-github').on('click', function(){
    $('.profile .me dl .git figure').show('on');
});

$('.profile .me dl .git i.xi-close').on('click', function(){
    $('.profile .me dl .git figure').hide('on');
});
/*까지 반응형 add*/


$('.portfolio_01 .guide i').on('click', function(){
    $('.portfolio_01 .guide figure').show('on');
});

$('.portfolio_01 .guide i.xi-close').on('click', function(){
    $('.portfolio_01 .guide figure').hide('on');
});


$('.portfolio_02 .guide i').on('click', function(){
    $('.portfolio_02 .guide figure').show('on');
});

$('.portfolio_02 .guide i.xi-close').on('click', function(){
    $('.portfolio_02 .guide figure').hide('on');
});


$('.portfolio_04 .guide i').on('click', function(){
    $('.portfolio_04 .guide figure').show('on');
});

$('.portfolio_04 .guide i.xi-close').on('click', function(){
    $('.portfolio_04 .guide figure').hide('on');
});

// $('.portfolio_01 .guide i').click(function(){
//     $('body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     return false;
//     });
//     });

//     $('.portfolio_01 .guide i.xi-close').click(function(){
//     $('body').removeClass('scrollDisable').off('scroll touchmove mousewheel');
// });


$('.guide figure').on('scroll mousewheel touchmove', function(e){
    e.stopPropagation();
})






var count = 0;
        
    var password = prompt('😊다시 준비중입니다. 비밀번호를 입력하시거나 개인번호로 연락주세요😊');
    
    while(count < 1)
    {
        if (password == "헤진")
            { alert('😉반갑습니다😉');
    break;
            }
    
    var password = prompt('😐다시 입력하세요😐');
    }
//-----------------------------------------------------------------
});