$(document).ready(function() {
    // animate the landing text to fade in and move down slightly
    $("#landing_image_text").animate({top: "38%", opacity: 1.0}, 1000, function() {
        // when the text is done animating, animate certain words to a green color
        $("#landing_image_text span").animate({color:"#5EBA40"}, 1000, function() {
            setTimeout(function() {
                $("#landing_image_text").animate({opacity:0.0}, 1000);
                $("#landing_div_blur").animate({opacity:0.0}, 1000, function() {
                    setTimeout(function() {
                        $(".car_info").animate({opacity:1.0}, 1000);
                    }, 500)
                });
            }, 1000);
        });
    });
    
    // evoked whenever the user scrolls
    $(window).scroll(function() {
        var currentWindowScrollTop = $(this).scrollTop();
        var newImageScrollTop = currentWindowScrollTop / 30.0;
        $("#landing_image_text").css({top:50 - newImageScrollTop + "%"});
    });
});