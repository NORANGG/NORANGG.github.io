$(function(){
//-----------------------------------------------------------------
let sc=$('.section');
let sideBar=$('nav li');   
$('#main').fullpage({
    anchors:['intro','portfolio_01','portfolio_02','portfolio_03','portfolio_04','portfolio_05','training', 'Project','profile',],              
    afterLoad:function(origin, destination, direction){
        let idx=destination.index;                                
        sc.eq(idx).addClass("on").siblings().removeClass('on');  
        sideBar.eq(idx).addClass("on").siblings().removeClass('on'); 
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


$('.Project .btn_detail .detail_box_01').on('click', function(){
    $('.Project #btn_big .guide').show('on');
});

$('.Project #btn_big .guide i.xi-close').on('click', function(){
    $('.Project #btn_big .guide').hide('on');
});




// $('.Project .btn_list .btn_list_01').on('click', function(){
//     $('.Project .btn_list .btn_list_01 img:last-child').toggleClass('on');
//     $('.Project .btn_list .btn_list_01 img:first-child').toggleClass('on');
// });

// $('.Project .btn_list .btn_list_02').on('click', function(){
//     $('.Project .btn_list .btn_list_02 img:last-child').toggleClass('on');
//     $('.Project .btn_list .btn_list_02 img:first-child').toggleClass('on');
// });

// $('.Project .btn_list .btn_list_03').on('click', function(){
//     $('.Project .btn_list .btn_list_03 img:last-child').toggleClass('on');
//     $('.Project .btn_list .btn_list_03 img:first-child').toggleClass('on');
// });

// $('.Project .btn_list .btn_list_04').on('click', function(){
//     $('.Project .btn_list .btn_list_04 img:last-child').toggleClass('on');
//     $('.Project .btn_list .btn_list_04 img:first-child').toggleClass('on');
// });




$('.Project .btn_list .btn_list_01').on('click', function(){
    $('.Project .btn_detail .detail_box_01').show('on');
});

$('.Project .btn_list .btn_list_01').on('click', function(){
    $('.Project .btn_detail .detail_box_02,.Project .btn_detail .detail_box_03,.Project .btn_detail .detail_box_04').hide('on');
});



$('.Project .btn_list .btn_list_02').on('click', function(){
    $('.Project .btn_detail .detail_box_02').show('on');
});

$('.Project .btn_list .btn_list_02').on('click', function(){
    $('.Project .btn_detail .detail_box_01,.Project .btn_detail .detail_box_03,.Project .btn_detail .detail_box_04').hide('on');
});



$('.Project .btn_list .btn_list_03').on('click', function(){
    $('.Project .btn_detail .detail_box_03').show('on');
});

$('.Project .btn_list .btn_list_03').on('click', function(){
    $('.Project .btn_detail .detail_box_01,.Project .btn_detail .detail_box_02,.Project .btn_detail .detail_box_04').hide('on');
});



$('.Project .btn_list .btn_list_04').on('click', function(){
    $('.Project .btn_detail .detail_box_04').show('on');
});

$('.Project .btn_list .btn_list_04').on('click', function(){
    $('.Project .btn_detail .detail_box_01,.Project .btn_detail .detail_box_02,.Project .btn_detail .detail_box_03').hide('on');
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






// let count = 0;
        
//     var password = prompt('😊다시 준비중입니다. 비밀번호를 입력하시거나 개인번호로 연락주세요😊');
    
//     while(count < 1)
//     {
//         if (password == "헤진")
//             { alert('😉반갑습니다😉');
//     break;
//             }
    
//     var password = prompt('😐다시 입력하세요😐');
//     }
//-----------------------------------------------------------------
});