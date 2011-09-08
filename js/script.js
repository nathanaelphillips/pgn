/* Author: 

*/
$(function() {
	$("header nav li").hover(function() {
		var e = this;
		$(e).find("div.hover").fadeIn();
		$(e).find("a > div").stop().animate({marginTop: "-20px", marginBottom: "20px"});
		$(e).find("img").stop().animate({width: "40px", height: "8px", left: "50px", opacity: 0.4});
		//$(e).find("p").animate({textShadow: "#aaa 0px 3px 6px"});
	},
	function() {
		var e = this;
		$(e).find("div.hover").fadeOut();
		$(e).find("a > div").stop().animate({marginTop: "0", marginBottom: "0"});
		$(e).find("img").stop().animate({width: "85px", height: "15px", left: "27px", opacity: 1});
		//$(e).find("p").animate({textShadow: "#000 0px 0px 0px"});
	});
	//set the link
	$('#top-link').topLink({
	  min: 400,
	  fadeSpeed: 500
	});
	//smoothscroll
	$('#top-link').click(function(e) {
	  e.preventDefault();
	  $.scrollTo(0,300);
	});
});
jQuery.fn.topLink = function(settings) {
  settings = jQuery.extend({
    min: 1,
    fadeSpeed: 200
  }, settings);
  return this.each(function() {
    //listen for scroll
    var el = $(this);
    el.hide(); //in case the user forgot
    $(window).scroll(function() {
      if($(window).scrollTop() >= settings.min)
      {
        el.fadeIn(settings.fadeSpeed);
      }
      else
      {
        el.fadeOut(settings.fadeSpeed);
      }
    });
  });
};






















