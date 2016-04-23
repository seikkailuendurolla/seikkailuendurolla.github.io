$( document ).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 4) {
            $(".nav").removeClass("navStart");
            $(".nav").addClass("navScroll");
        } else {
            $(".nav").addClass("navStart");
            $(".nav").removeClass("navScroll");
        }
    });
});
