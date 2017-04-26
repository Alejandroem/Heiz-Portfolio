$(function() {
	/* hugo vazquez 42589419  */
	Holder.run({
		domain: "holder.canvas",
		renderer: "canvas"
	});



	$('div .close').click(function(e){
		e.preventDefault();
		$(this).parent().hide();
	});



	
	$('.scrollbar-macosx').scrollbar();

	$('.clk_home').click(function(e){ e.preventDefault(); $('.menuTop').slideUp( "fast" ); gotoScreen(0); });
	$('.clk_bio').click(function(e){  e.preventDefault(); $('.menuTop').slideDown( "slow" ); gotoScreen(1); });
	$('.clk_galeria').click(function(e){ e.preventDefault(); $('.menuTop').slideDown( "slow" ); gotoScreen(2); });
	$('.clk_investigacion').click(function(e){ e.preventDefault(); $('.menuTop').slideDown( "slow" ); gotoScreen(3); });
	$('.clk_estrategia').click(function(e){ e.preventDefault(); $('.menuTop').slideDown( "slow" ); gotoScreen(4); });


	$('.clk_instagram').click(function(e){ e.preventDefault(); window.open('https://instagr.am/iheiz/', '_blank'); });
	$('.clk_be').click(function(e){ e.preventDefault(); window.open('https://behance.net/Heiz', '_blank'); });
	$('.clk_mail,.email').click(function(e){
		e.preventDefault();
		var email = 'iheiz@icloud.com';
		var subject = 'Contacto desde Página Web de Heiz';
		var emailBody = "Hey Heiz:" + escape('\r\n');
		window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
		//window.open('', '_blank');
	});

	var photoBio=1;
	$(".esimg1").click(function(e){
		e.preventDefault();
		photoBio++;
		$(this).attr( "src", "images/bio"+photoBio+".jpg" );
		photoBio = (photoBio==3)?0:photoBio;
	});


	$('.ga01').click(function(e){ 
		e.preventDefault();

		$.get( "pagegallery/proj1.html", function( data ) {
			$( ".contentload" ).html( data );
			$(".contentFloat").show();
		});

	});

	
	




	var winWidth  = 0;
	var winHeight = 0;
	var indexPage = 0;
	sizeChanges();
	$(window).resize(function() { sizeChanges(); });
	function sizeChanges(){
		winWidth  = $(window).width();
		winHeight = $(window).height();
		var pages = $(".page-container").length;


		$(".contentFloat")
		.width( winWidth-50 )
		.height( winHeight-50 )
		.css({'margin-top': -((winHeight-50)/2), 'margin-left': -((winWidth-50)/2)  });
		
 
		$(".page-container")
		.width( winWidth )
		.height( winHeight );

		$(".pages-container")
		.width( winWidth * pages )
		.height( winHeight )
		.css({left: -winWidth * indexPage});


	}// sizeChanges
	function gotoScreen (page) {
		indexPage = page;
		$('.pages-container').animate({left: -winWidth * page}, "slow", function() {  });
	}// gotoScreen





});






