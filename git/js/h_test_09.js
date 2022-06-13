$(function(){
//------------------------------------------------------------------

    
    /*디데이_02*/
    var dday = new Date("jan 25, 2023 0:00:00").getTime();
    setInterval(function(){   //setInterval 은 주기적으로 갱신됨. setTime은 하루에한번만!
        var today = new Date().getTime();   //현재 날짜의 밀리초 계산.
        var distance = dday - today;   //gap도 ㅇㅋ distance도 ㅇㅋ
        var day = Math.ceil(distance / (1000 * 60 * 60 * 24));
        var hour = Math.ceil((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var min = Math.ceil((distance % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.ceil((distance % (1000 * 60)) / 1000);

        //화면에 나옴
        document.getElementById("d-day_02").innerHTML =  day + " : " + hour + " : " + min + " : " + sec;
    }, 1000);


    /*벚꽃_팝업창_02*/
    $('.etc_10_wrap .sec_05 .info button').on('click', function(){
        swal ({
            title: "무료번호 신청이 \n 완료되었습니다",
            text: "바로 번호를 보내드릴게요~",
        });
    });
    
    
//------------------------------------------------------------------
});