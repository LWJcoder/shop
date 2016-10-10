// JavaScript Document
$(function(){
	$('.navli').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');

		
	});

	$('.shopClass_item').mouseover(function(){
		$(this).addClass('shopClassActive').siblings().removeClass('shopClassActive');

		$(".shopClass_list").addClass("show");
	});

	$('.shopClass_item').mouseout(function(){
			$(".shopClass_list").addClass("hide");
	})

});