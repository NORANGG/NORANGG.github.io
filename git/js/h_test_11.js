$(function(){
    //-------------------------------------------------
        var count = 0;
            
        var password = prompt('😊비밀번호를 입력하세요😊');
        
        while(count < 1)
        {
            if (password == "hyejin")
                {   ;
        break;
                }
        
        var password = prompt('😐다시 입력하세요😐');
        }




                /*슬라이드_10*/
                $('.etc_10_wrap .sec_02 .lotto_slide').slick({
                    arrows:false,
                    autoplay:true,
                    autoplaySpeed:2000,
                    pauseOnHover:false,
                    slidesToShow: 4,
                    slidesToScroll : 1,
                    responsive: [
                        {
                            breakpoint: 850,
                            settings: {
                            slidesToShow: 3,
                            }
                        },
            
                        {
                            breakpoint: 600,
                            settings: {
                            slidesToShow: 3,
                            }
                        },
            
                        {
                            breakpoint: 350,
                            settings: {
                            slidesToShow: 2,
                            }
                        },
                    ]
                });
        
        
                $('.etc_10 .container .info_05').on('click', function(){
                swal ({
                    title: "🎈무료번호를 \n 보내드릴게요🎈",
                });
            });
    //-------------------------------------------------
    });