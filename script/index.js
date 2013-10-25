$(document).ready(function() {
    // animate the landing text to fade in and move down slightly
    $("#landing_image_text").animate({top: "43%", opacity: 1.0}, 1000, function() {
        // when the text is done animating, animate certain words to a green color
        $("#landing_image_text span").animate({color:"#5EBA40"}, 1000);
    });
    
    // evoked whenever the user scrolls
    $(window).scroll(function() {
        var currentWindowScrollTop = $(this).scrollTop();
        var newImageScrollTop = currentWindowScrollTop / 30.0;
        $("#landing_image_text").css({top:43 - newImageScrollTop + "%"});
    });
});