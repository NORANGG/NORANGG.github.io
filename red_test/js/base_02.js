$(function(){
//------------------------------------------------------------------
    
    /*룰렛*/
        const wheel = document.querySelector('.roulette_wheel'); //여기에 대한 값 찾음
        const startButton = document.querySelector('.click_btn');
        // let deg = 0; //각도는 0으로 둔다.
    
    
        startButton.addEventListener('click', () => {   // 지정한 유형의 이벤트를 대상이 수신할때마다 호출할 함수 설정
            startButton.style.pointerEvents = 'none';  //마우스 커서 이벤트 비활성화
            // deg = Math.floor(100 + Math.random() * 100); 이건 랜덤으로 돌릴때 사용 
            deg = Math.floor(1800);
            wheel.style.transition = 'all 5s ease-out';
            wheel.style.transform = `rotate(${deg}deg)`;


            setTimeout(function(){  
                swal("당첨되셨습니다! \n 30포인트를 받으세요!");   //룰렛돌리고 5초후에 이거나옴.
            },5500)


            function openLayer(){
                swal("당첨되셨습니다!\n 2주 무료이용권을 받으세요!")
                .then(function(){
                    $('.roulette_wheel').stop();
                    $('.rullet').fadeOut()
                    $('body').css('background-color', '#efc05b');;
                    $(".apply_wrap").fadeIn();
                });			
            }
        });
    
        wheel.addEventListener('transitionend', () => {
            startButton.style.pointerEvents = 'auto'; //-> auto는 계속 돌릴 수 있음. none은 한번만!
            wheel.style.transition = 'none';
            const actualDeg = deg % 360; //-> 계속 돌릴 수 있음. or const대신 let(할당된값변경가능)/var(즉시실행함수)
            wheel.style.transform = `rotate(${actualDeg}deg)`;
        })
    
    
        // if (startButton.addEventListener('click', () => {
        //     $(function(){
        //         var map = {'a':'당첨되셨습니다'}
        //         alert(map.a);
        //     });
        // }))
        
        
    
    /*디데이*/
        var dday = new Date("January 25, 2023 0:00:00").getTime();
        setInterval(function(){   //setInterval 은 주기적으로 갱신됨. setTime은 하루에한번만!
            var today = new Date().getTime();   //현재 날짜의 밀리초 계산.
            var distance = dday - today;   //gap도 ㅇㅋ distance도 ㅇㅋ
            var day = Math.ceil(distance / (1000 * 60 * 60 * 24));
            var hour = Math.ceil((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var min = Math.ceil((distance % (1000 * 60 * 60)) / (1000 * 60));
            var sec = Math.ceil((distance % (1000 * 60)) / 1000);

            //화면에 나옴
            document.getElementById("d-day").innerHTML = "내 생일까지 " + day + "일 " + hour + "시간 " + min + "분 " + sec + "초 남아써😘";
        }, 1000);



    /*시간*/
        var date = new Date();
        $('.deta_01').html(moment(date).format('YYYY . MM . DD . HH:mm'));  //현재날짜
        $('.deta_02').html(moment().startOf('days').fromNow());  //현재날짜에서 -1일



    /*팝업창*/        
        $('.info_02_05 .input_button').on('click', function(){
            swal ({
                title: "무료 번호를 신청하셨습니다",
                text: "바로 번호를 보내줄게염",
            });
        });



    /*시간_02*/
        var date = new Date();
        $('.deta_02_01').html(moment(date).format('YYYY . MM . DD . HH:mm'));  //현재날짜
        $('.deta_02_02').html(moment().startOf('days').fromNow());  //현재날짜에서 -1일
        // $('.deta_02_02').html(moment('2022.03.13').fromNow());  //현재날짜 - moment로 지정한 날짜



    /*디데이_02*/
        var dday = new Date("May 08, 2022 0:00:00").getTime();
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
        $('.etc_03_wrap .btn').on('click', function(){
            swal ({
                title: "🌸니는 무료번호 신청했구~~🌸",
                text: "🌸나는 바로 보내줄겨🌸",
            });
        });



    /*바다_팝업창_03*/
    $('.etc_04_wrap .btn').on('click', function(){
        swal ({
            title: "🌊이거슨 버슨 누르면 나옴🌊",
            text: "🌊여기는 서브타이틀이지🌊",
        });
    });




    /*초록격자_팝업창_04*/
    $('.etc_05_wrap .info_02 button').on('click', function(){
        swal ({
            title: "🍀초록색 예쁘당 메인타이틀🍀",
            text: "🌼초록색에 핫핑크를 더한 서브타이틀🌼",
        });
    });



    /*디데이_03*/
    var dday = new Date("Jan 25, 2023 0:00:00").getTime();
    setInterval(function(){   //setInterval 은 주기적으로 갱신됨. setTime은 하루에한번만!
        var today = new Date().getTime();   //현재 날짜의 밀리초 계산.
        var distance = dday - today;   //gap도 ㅇㅋ distance도 ㅇㅋ
        var day = Math.ceil(distance / (1000 * 60 * 60 * 24));
        var hour = Math.ceil((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var min = Math.ceil((distance % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.ceil((distance % (1000 * 60)) / 1000);

        //화면에 나옴
        document.getElementById("d-day_03").innerHTML =  day + " : " + hour + " : " + min + " : " + sec;
    }, 1000);



    /*슬라이드*/
    $('.lotto_slide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll : 1,
    });




    /*hide객체숨김*/
    $('.etc_09 .hide>figure').on('click', function(){
        $('.etc_09 .hide .syasinn_wrap').slideToggle(500);
        $('.etc_09 .hide .syasinn_wrap_02').slideToggle(500);
        $(this).toggleClass('on');
    })

    /*파티_팝업창_04*/
    $('.etc_09 .container .info5').on('click', function(){
        swal ({
            title: "🎈무료 조합 받아 갑니다🎈",
            text: "🎈무료 조합 서브 타이틀🎈",
        });
    });




//------------------------------------------------------------------
});