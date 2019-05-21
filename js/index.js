$(document).ready(function() {
    $('#cicd li').mouseover(function(){
        dataId = $(this).attr('data-id')
        $('#cinav-sub').show()
        $('.sub_content').hide()
        $('#'+dataId).show()
		$('#'+dataId).addClass('active')
    })
    $('#cinav-sub').mouseover(function(){
        $('#cinav-sub').show()
    }).mouseout(function(){
        $('#cinav-sub').hide()
    })

	
	$(window).scroll(function(){
		var topp = $(document).scrollTop();
		if(topp > 80){
			$('.cinav').css({"position":"fixed","top":"0","height":"60px"})
			$('#cicd').css({"top":"20px"})
			$('.sousuo').hide()
			$('.cicdRight').show()
		}else
		{
			$('.cinav').css({"position":"absolute","top":"45px","height":"75px"})
			$('#cicd').css({"top":"25px"})
			$('.sousuo').show()
			$('.cicdRight').hide()
		}

	})
	
	$('.col-md-3').mouseover(function(){
		dataId = $(this).attr('data-id')
		$(".content-top-row-"+dataId).find('.btn-item').show()	
		$(".content-top-row-"+dataId).find('.item-span').hide()
		$(".content-2-row-"+dataId).find('.btn-item').show()	
		$(".content-2-row-"+dataId).find('.item-span').hide()
	}).mouseout(function(){
        $(".content-top-row-"+dataId).find('.btn-item').hide()
		$(".content-top-row-"+dataId).find('.item-span').show()
		$(".content-2-row-"+dataId).find('.btn-item').hide()
		$(".content-2-row-"+dataId).find('.item-span').show()
    })
	
	
	
})