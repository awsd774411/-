$(document).ready(function(){
	

	$(window).scroll(function(){
		var cinav = $('#cinav')
		var cinav_ul = $('#cinav_ul')
		var cinav_li = $('#cinav_ul li')
		var jg = $('#jg2s')
		var goshop = $('#goshop')
		var topp = $(document).scrollTop();
		
		if(topp > 80){
			cinav.css({"position":"fixed","top":"0",})
			cinav_ul.stop().animate({left:'160px',},"3000")
			jg.fadeIn(1500)
		}else
		{
			cinav.css({"position":"absolute","top":"100px",})
			cinav_ul.stop().animate({left:'0px',})
			jg.stop().fadeOut()
		};
	})
	
	$('.section-1 a').mouseover(function(){
		var bgname = String($(this).attr("class")) + "-bg"
		$(this).click(function(){
			$('.bg').addClass('none')
			$('.'+bgname).removeClass('none')			
		})
	})
	
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
	
	
	$('#btnjump').click(function(){
		 window.location.href="坚果Pro2s购买页.html";
	})
	
		
		
	
	
})