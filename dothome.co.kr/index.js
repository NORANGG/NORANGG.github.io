$(function(){
//-------------------------------------------------------------------------------
    $('#main .profile .pro_left .pro_left_center i.xi-kakaotalk').on('click', function(){
        $('#main .profile .pro_left .pro_left_center .kakao figure').show('on');
    });
    
    $('#main .profile .pro_left .pro_left_center i.xi-github').on('click', function(){
        $('#main .profile .pro_left .pro_left_center .git figure').show('on');
    });
    
    $('#main .profile .pro_left .pro_left_center i.xi-close').on('click', function(){
        $('#main .profile .pro_left .pro_left_center figure').hide('on');
    });



    $('#header .nav ul li:nth-of-type(3)').on('click', function(){
        $('#project .guide .my_cv figure').show('on');
    });







    $('#project .top_one').on('click', function(){
        $('#project .text_wrap_01').show();
        $('#project .text_wrap_02,.text_wrap_03,.text_wrap_04,.text_wrap_05,.text_wrap_06,.text_wrap_07,.text_wrap_08,.text_wrap_09,.text_wrap_10,.text_wrap_11,.text_wrap_12,.text_wrap_13').hide();
    });

    $('#project .top_two').on('click', function(){
        $('#project .text_wrap_02').show();
        $('#project .text_wrap_01,.text_wrap_03,.text_wrap_04,.text_wrap_05,.text_wrap_06,.text_wrap_07,.text_wrap_08,.text_wrap_09,.text_wrap_10,.text_wrap_11,.text_wrap_12,.text_wrap_13').hide();
    });

    $('#project .top_three').on('click', function(){
        $('#project .text_wrap_03').show();
        $('#project .text_wrap_01,.text_wrap_02,.text_wrap_04,.text_wrap_05,.text_wrap_06,.text_wrap_07,.text_wrap_08,.text_wrap_09,.text_wrap_10,.text_wrap_11,.text_wrap_12,.text_wrap_13').hide();
    });

    $('#project .top_four').on('click', function(){
        $('#project .text_wrap_04').show();
        $('#project .text_wrap_01,.text_wrap_02,.text_wrap_03,.text_wrap_05,.text_wrap_06,.text_wrap_07,.text_wrap_08,.text_wrap_09,.text_wrap_10,.text_wrap_11,.text_wrap_12,.text_wrap_13').hide();
    });

    $('#project .top_five').on('click', function(){
        $('#project .text_wrap_05').show();
        $('#project .text_wrap_01,.text_wrap_02,.text_wrap_03,.text_wrap_04,.text_wrap_06,.text_wrap_07,.text_wrap_08,.text_wrap_09,.text_wrap_10,.text_wrap_11,.text_wrap_12,.text_wrap_13').hide();
    });










    $('#project .center_one').on('click', function(){
        $('#project .text_wrap_06').show();
        $('#project .text_wrap_01,.text_wrap_02,.text_wrap_03,.text_wrap_04,.text_wrap_05,.text_wrap_07,.text_wrap_08,.text_wrap_09,.text_wrap_10,.text_wrap_11,.text_wrap_12,.text_wrap_13').hide();
    });
    
    $('#project .center_two').on('click', function(){
        $('#project .text_wrap_07').show();
        $('#project .text_wrap_01,.text_wrap_02,.text_wrap_03,.text_wrap_04,.text_wrap_05,.text_wrap_06,.text_wrap_08,.text_wrap_09,.text_wrap_10,.text_wrap_11,.text_wrap_12,.text_wrap_13').hide();
    });
    

    $('#project .center_three').on('click', function(){
        $('#project .text_wrap_08').show();
        $('#project .text_wrap_01,.text_wrap_02,.text_wrap_03,.text_wrap_04,.text_wrap_05,.text_wrap_06,.text_wrap_07,.text_wrap_09,.text_wrap_10,.text_wrap_11,.text_wrap_12,.text_wrap_13').hide();
    });

    $('#project .center_four').on('click', function(){
        $('#project .text_wrap_09').show();
        $('#project .text_wrap_01,.text_wrap_02,.text_wrap_03,.text_wrap_04,.text_wrap_05,.text_wrap_06,.text_wrap_07,.text_wrap_08,.text_wrap_10,.text_wrap_11,.text_wrap_12,.text_wrap_13').hide();
    });











    $('#project .bottom_one').on('click', function(){
        $('#project .text_wrap_10').show();
        $('#project .text_wrap_01,.text_wrap_02,.text_wrap_03,.text_wrap_04,.text_wrap_05,.text_wrap_07,.text_wrap_08,.text_wrap_08,.text_wrap_09,.text_wrap_11,.text_wrap_12,.text_wrap_13').hide();
    });
    
    $('#project .bottom_two').on('click', function(){
        $('#project .text_wrap_11').show();
        $('#project .text_wrap_01,.text_wrap_02,.text_wrap_03,.text_wrap_04,.text_wrap_05,.text_wrap_06,.text_wrap_08,.text_wrap_08,.text_wrap_09,.text_wrap_10,.text_wrap_12,.text_wrap_13').hide();
    });
    

    $('#project .bottom_three').on('click', function(){
        $('#project .text_wrap_12').show();
        $('#project .text_wrap_01,.text_wrap_02,.text_wrap_03,.text_wrap_04,.text_wrap_05,.text_wrap_06,.text_wrap_07,.text_wrap_08,.text_wrap_09,.text_wrap_10,.text_wrap_11,.text_wrap_13').hide();
    });

    $('#project .bottom_four').on('click', function(){
        $('#project .text_wrap_13').show();
        $('#project .text_wrap_01,.text_wrap_02,.text_wrap_03,.text_wrap_04,.text_wrap_05,.text_wrap_06,.text_wrap_07,.text_wrap_08,.text_wrap_09,.text_wrap_10,.text_wrap_11,.text_wrap_12').hide();
    });
    






    $('#project .text_wrap_01 .text_btn a:first-child').on('click', function(){
        $('#project .guide_project_top_01 figure').show();
    });

    $('#project .text_wrap_02 .text_btn a:first-child').on('click', function(){
        $('#project .guide_project_top_02 figure').show();
    });

    $('#project .text_wrap_04 .text_btn a:first-child').on('click', function(){
        $('#project .guide_project_top_04 figure').show();
    });



    $('#project .text_wrap_10 .text_btn a:first-child').on('click', function(){
        $('#project .guide_project_bottom_01 figure').show();
    });

    $('#project .text_wrap_10 .text_btn a:last-child').on('click', function(){
        $('#project .guide_project_bottom_01_02 figure').show();
    });

    $('#project .text_wrap_11 .text_btn a:first-child').on('click', function(){
        $('#project .guide_project_bottom_02 figure').show();
    });

    $('#project .text_wrap_12 .text_btn a:first-child').on('click', function(){
        $('#project .guide_project_bottom_03 figure').show();
    });

    $('#project .text_wrap_13 .text_btn a:first-child').on('click', function(){
        $('#project .guide_project_bottom_04 figure').show();
    });


    $('#project .guide i.xi-close').on('click', function(){
        $('#project .guide figure').hide();
    });

    
    
    
    




    $('#project .tab_meun>li').on('click', function(){
        let $this= $(this);
        let idx= $(this).index(); 

        $('#project .tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
        $this.addClass('on').siblings().removeClass('on');
    });


    

    $('#project .guide .guide_project_bottom_01 .page_name li').on('click', function(){
        let $list= $(this);
        let Img= $(this).index(); 

        $('#project .guide .guide_project_bottom_01 .page_img li').eq(Img).addClass('on').siblings().removeClass('on');
        $list.addClass('on').siblings().removeClass('on');
    });


    $('#project .guide .guide_project_bottom_01_02 .page_name li').on('click', function(){
        let $list_02= $(this);
        let Img_02= $(this).index(); 

        $('#project .guide .guide_project_bottom_01_02 .page_img li').eq(Img_02).addClass('on').siblings().removeClass('on');
        $list_02.addClass('on').siblings().removeClass('on');
    });
    






//-------------------------------------------------------------------------------

});


