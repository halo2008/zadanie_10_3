$ (function(){
    var carouselList = $("#carousel ul");   
    
	function changeSlide() {   
		carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide );
	}
  
	setInterval(changeSlide, 4000);
  
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
  
	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.after(lastItem);
		carouselList.css({marginRight:0});
	}
  
	$("#left").click(function(){
		carouselList.animate({'marginLeft': "-=400"}, 500, moveFirstSlide );
	});
  
	$("#right").click(function(){
		carouselList.animate({'marginRight': "+=400"}, 500, moveLastSlide);
	});  
 });