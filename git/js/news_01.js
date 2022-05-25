$(function(){
//------------------------------------------------------------------



    /*룰렛*/
    const wheel = document.querySelector('.roulette_wheel'); //여기에 대한 값 찾음
    const startButton = document.querySelector('.click_btn');
    // let deg = 0; //각도는 0으로 둔다.


    startButton.addEventListener('click', () => {   // 지정한 유형의 이벤트를 대상이 수신할때마다 호출할 함수 설정
        startButton.style.pointerEvents = 'none';  //마우스 커서 이벤트 비활성화
        // deg = Math.floor(100 + Math.random() * 100); 이건 랜덤으로 돌릴때 사용 
        deg = Math.floor(2650);
        wheel.style.transition = 'all 4s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;


        setTimeout(function(){  
            swal({title:"당첨되셨습니다! \n 30포인트를 받으세요!"},
            function(){
                $('.layer').show();
            })   //룰렛돌리고 5.5초후에 이거나옴.
        },4500);
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


        
    $().on('click', function(){
        $('.layer').show('on');
    });

    // $('.layer .x').on('click', function(){
    //     $('.layer').hide('on');
    // }); 

    $('.info_02_05').on('click', function(){
        $('.layer').hide('on');
    }); 


    function layer() {
        var url = "layer.html"
        var name = "layer test"
        var option = "width = 500, height = 500, top = 100, left = 200, location = no"
        window.open(url, name, option);
    }

        



        
    $('.time .slider>div').slick({
            arrows:false,
            autoplay:true,
            autoplaySpeed:1000,
            pauseOnHover:false,
            pauseOnFocus:false,
            vertical:true,
            slidesToShow: 4,
        //     responsive: [
        // {
        //         breakpoint: 769,
        //         settings: {
        //         slidesToShow: 3,
        //         }
        //     },
        
        //     {
        //         breakpoint: 600,
        //         settings: {
        //         slidesToShow: 2,
        //         }
        //     },

        //     ]

    });
    

    

    
//------------------------------------------------------------------
});