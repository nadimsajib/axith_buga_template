$(document).ready(function(){
	"user strict";

	<!-- ============================-->
	<!-- =====bootstrap scrollspy====-->
	<!-- ============================-->

	$('body').scrollspy({
		target: '.navbar',
		offset: 160
	});

	<!-- ============================-->
	<!-- ===== skillbar ====-->
	<!-- ============================-->
	
	var skillBarTopPos = jQuery('.skillbar').position().top;
	jQuery(document).scroll(function () {
		var scrolled_val = $(document).scrollTop().valueOf();
		if(scrolled_val>skillBarTopPos-250) startAnimation();
	});
	
	function startAnimation() {
		jQuery('.skillbar').each(function () {
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},6000)
		})
	};

	<!-- ============================-->
	<!-- ===== fancy box ====-->
	<!-- ============================-->

	$('.youtube-media').on('click',function (e) {
		var jWindow = $(window).width();
		if (jWindow <= 410){
			return;
		}
		$.fancybox({
			href: this.href,
			padding: 4,
			type: "iframe",
			"href": this.href.replace(new RegExp("watch\\?v=","i"),'v/'),
		});
		return false;
	})

});



<!-- ================================== -->
<!-- ========== Navbar ========= -->
<!-- ================================== -->

jQuery(window).scroll(function (){
	var top = jQuery(document).scrollTop();
	var batas = jQuery(window).height();
	if(top > batas){
		jQuery('.main-menu').addClass('tiny');
		jQuery('.main-menu').css('opacity','1');
	}else{
		jQuery('.main-menu').removeClass('tiny');
	}
})