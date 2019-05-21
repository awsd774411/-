$(document).ready(function(){
	
	
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