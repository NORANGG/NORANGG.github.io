$(function(){
    //-------------------------------------------------
        var count = 0;
            
        var password = prompt('πλΉλ°λ²νΈλ₯Ό μλ ₯νμΈμπ');
        
        while(count < 1)
        {
            if (password == "hyejin")
                {   ;
        break;
                }
        
        var password = prompt('πλ€μ μλ ₯νμΈμπ');
        }




                /*μ¬λΌμ΄λ_10*/
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
                    title: "πλ¬΄λ£λ²νΈλ₯Ό \n λ³΄λ΄λλ¦΄κ²μπ",
                });
            });
    //-------------------------------------------------
    });