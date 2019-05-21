$(document).ready(function(){
	

	// 次级菜单
	$(window).scroll(function(){

        var cinav = $('#cinav')
		var cinav_ul = $('#cinav_ul')
		var cinav_li = $('#cinav_ul li')
		var jg = $('#jg2s')
		var goshop = $('#goshop')
		var topp = $(document).scrollTop();

		if(topp > 80){
			cinav_ul.stop().animate({left:'160px',top:'18px'},"3000")
			cinav.css({"position":"fixed","top":"0","height":"60px"})						
			jg.fadeIn(1500)
			goshop.animate({top:'18px'},0)
		}else
		{	
			jg.fadeOut(50)			
			cinav.css({"position":"absolute","top":"100px","height":"40px"})
			cinav_ul.stop().animate({left:'0px',top:'8px'})						
			goshop.animate({top:'8px'},0)
		}
	});
	
	
	// 款式选择
	$('.phoneColor').on('click','li',function(){
		var bgColor = $(this).attr('data-id')
		var phc = $(this).find('a').html()
		$('.gm-bg').attr('src',"img/gm-"+ bgColor +"bg.webp")
		$('.phoneColor').find('img').removeClass('active-border-color')
		$(this).find('img').addClass('active-border-color')			
		$('.phc').html(phc);
	})
	//ROM选择
	$('.phoneRom').on('click','li',function(){
		var phR = $(this).find('h1').html()
		var money = $(this).find('div').attr('data-Value')
		$('.phoneRom').find('div').removeClass('activeborder')
		$(this).find('div').addClass('activeborder')		
		$('.phR').html(phR)		
		$('.money').html(money);
	})
	
	
	
	
	
	// 购买栏
	var minAwayBtm = 372;  // 距离页面底部的最小距离
	$(window).scroll(function() {
        var awayBtm = $(document).height() - $(window).scrollTop() - $(window).height();
    if (awayBtm > minAwayBtm) {
		$('.section-3').css({"position":"fixed"})
    }else{
		$('.section-3').css({"position":"relative"})
	}
	});
	
	
	// 返回顶部
	$('.back-top').hide();
    $(window).scroll(function(){

        if($(this).scrollTop() > 100){
            $('.back-top').fadeIn();
        }else{
            $('.back-top').fadeOut();
        }
    });
 
    $('.back-top a').click(function(){
         $('html ,body').animate({scrollTop: 0}, 600);
         return false;
    });
	
		
		
	
	
})