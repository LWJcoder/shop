
$(function(){
	 $('.m_title').click(function(){	
		$('.listOp').css("display","block");
	});

	 $(".screening_list  li").click(function(){
	 	var that = this;
	 	
	 	$(that).find("a").addClass("active");
		$(that).siblings().find("a").removeClass('active');
	 	$('.limit a').removeClass("active");
	 	
	 })
});

