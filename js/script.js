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
	});

	<!-- ============================-->
	<!-- ===== Portfolio section box ====-->
	<!-- ============================-->


	$('#portfolio a').nivoLightbox({
		effect: 'fadeScale'
	});

	<!-- ============================-->
	<!-- ===== owlcarousel team  ====-->
	<!-- ============================-->


	$('#owl-carousel-team').owlCarousel({
		/*autoplay: 3000,*/
		/*items:4,
		 itemsDesktop: [1199,3],
		 itemDesktopSmall: [979,3],

		 pagination: true,
		 paginationNumbers: false,

		 responsive: true,
		 responsiveRefreshRate: 200,
		 responsiveBaseWidth: window*/
	});

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
});


<!-- ================================== -->
<!-- ========== Map ========= -->
<!-- ================================== -->

$(document).ready(function() {
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,

			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(40.6700, -73.9400), // New York

			// How you would like to style the map.
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [{"color": "#444444"}]
			}, {
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [{"color": "#f2f2f2"}]
			}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {
				"featureType": "road",
				"elementType": "all",
				"stylers": [{"saturation": -100}, {"lightness": 45}]
			}, {
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [{"visibility": "simplified"}]
			}, {
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [{"visibility": "off"}]
			}, {
				"featureType": "transit",
				"elementType": "all",
				"stylers": [{"visibility": "off"}]
			}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#88e9ad"}, {"visibility": "on"}]}]
		};

		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.6700, -73.9400),
			map: map,
			title: 'Snazzy!'
		});
	}
});