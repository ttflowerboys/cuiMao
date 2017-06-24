$(function() {
	$(window).on("resize",function(){
		pheigt();
	});
	pheigt();
	function pheigt(){
		var windowheight = $(window).height();
		var page = ".mobilemain";		
		$(page).height(windowheight - 88);
		$(page).find(".center").height(windowheight - 256);
		
	}
	
	var lis = "#app-nav-btn li";
	var apppage = new Swiper("#appbanner", {
		speed:500,
		autoplay : 3000,
		autoplayDisableOnInteraction : false,
		effect : 'fade',
		simulateTouch : false,
		loop : true,
		pagination: '#appbanner .swiper-pagination',
		nextButton: '#appbanner .swiper-button-next',
        prevButton: '#appbanner .swiper-button-prev',
		fade: {
		  crossFade: true,
		},
		onSlideChangeStart: function(apppage){
			var i = $("#appbanner .swiper-slide-active").attr("data-swiper-slide-index");
			$(lis).removeClass("on").eq(i).addClass("on");
		},
		
	});
	$(lis).hover(function(e) {
		$(lis).removeClass("on");
		$(this).addClass("on");
        var i = $(lis).index(this) + 1;
		apppage.slideTo(i, 500, true);
    });
	
	$("#appbanner .main").hover(function(e) {
        apppage.stopAutoplay();
    },function(){
		apppage.startAutoplay();
	});

	$('.Nav li').hover(function(){
		$(this).siblings().addClass('default')
	},function(){
		$(this).siblings().removeClass('default')
	})
	
});



