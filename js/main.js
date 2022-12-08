$(function(){
	var winT=0;
	var winW;
	var pageN=0
	var categoryFlag=false;

	$("#menu li").addClass("active");


	$(window).scroll(function(){
		winT=$(window).scrollTop();

		if(winT > 100){
			if($("#header").hasClass("scroll") == false) $("#header").addClass("scroll");
		}
		else{
			if($("#header").hasClass("scroll") == true) $("#header").removeClass("scroll");
		}


		if(winT < $(".page1").offset().top-winHalf){
			pageN=0;
		}
		else if(winT < $(".page2").offset().top-winHalf){
			pageN=1;
		}
		else if(winT < $(".page3").offset().top-winHalf){
			pageN=2;
		}
		else if(winT < $(".page4").offset().top-winHalf){
			pageN=3;
		}
		else if(winT < $(".page5").offset().top-winHalf){
			pageN=4;
		}
		else{
			pageN=5;
		}

		if(categoryFlag){
			return;
		}
		else{
			if(pageN == 0){
				$(".slider").addClass("active");
			}
			else{
				$(".page"+pageN).addClass("active");

				if(pageN == 5){
					categoryFlag=true;
				}
			}
		}
	});
	$(window).resize(function(){
		winHalf=$(window).height()/2;
		winW=$(window).width();
		$(window).trigger("scroll");

		if(winW > 720){
			if($("#m_menu").hasClass("active")){
				$(".dim").trigger("click");
			}
		}
	});
	$(window).trigger("resize");

	$("#menu li").click(function(e){
		e.preventDefault();
		pageN=$(this).find("a").attr("href");
		pageN=$(pageN).offset().top;
		$("html").animate({scrollTop:pageN}, 400);
	});
	$("#m_menu li").click(function(e){
		e.preventDefault();
		$(".dim").trigger("click");
		pageN=$(this).find("a").attr("href");
		pageN=$(pageN).offset().top;
		$("html").delay(300).animate({scrollTop:pageN}, 400);
	});
	$("#m_menu .tab").click(function(e){
		e.preventDefault();
		$("body").toggleClass("fixed");
		$("#m_menu").toggleClass("active");
		$("#m_menu .tab").toggleClass("active");
		$(".dim").toggleClass("active");
	});
	$(".dim").click(function(){
		$("body").removeClass("fixed");
		$("#m_menu").removeClass("active");
		$("#m_menu .tab").removeClass("active");
		$(".dim").removeClass("active");
	});

	$(".up_btn").click(function(e){
		e.preventDefault();
		$("html").animate({scrollTop:0}, 400);
	});
});