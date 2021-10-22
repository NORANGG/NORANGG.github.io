$(function(){
//---------------------------------
$('#tap_content li').on('click', function(){
    
    var idx=$(this).index();
    //console.log(idx);
    $(this).addClass('oo').siblings().removeClass('oo');
    $('#tap_content .tab>div').eq(idx).addClass('oo').siblings().removeClass('oo');

});

//------위에꺼 슬라이드 하면 문제됨-------//



//---------------------------------
});