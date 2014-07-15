$(document).ready(function(){

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $(".banner-container").stop().animate({
            opacity: 0
        }, 100);
    } else {
        $(".banner-container").stop().animate({
            opacity: 1
        }, 100);
    }
});


$(window).scroll(function() {
	//var scrollTop = $(window).height();
    var scrollTop = 200;
    if ($(this).scrollTop() >= scrollTop) {
        $(".topbutton").stop().animate({
            opacity: 0.8
        }, 100);
    } else {
        $(".topbutton").stop().animate({
            opacity: 0
        }, 100);
    }
});


});