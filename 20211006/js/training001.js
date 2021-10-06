$(function(){

$(".훈이").on("click",function(){
    $("h1").hide();
});

$("#주먹밥").on("click",function(){
    $("h1").show();

});

$(".나는버튼").on("click",function(){
    $("figure").toggleClass("on")
});


});