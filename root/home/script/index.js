var time = 1500;

$(document).ready(function() {
    // animate the landing text to fade in and move down slightly
    $("#landing_image_text").animate({top: "38%", opacity: 1.0}, time, function() {
        // when the text is done animating, animate certain words to a green color
        $("#landing_image_text span").animate({color:"#5EBA40"}, time, function() {
            setTimeout(function() {
                $("#landing_image_text").animate({opacity:0.0}, time);
                $("#landing_div_blur").animate({opacity:0.0}, time, function() {
                    setTimeout(function() {
                        $(".car_info").animate({opacity:1.0}, time);
                    }, 500)
                });
            }, 1000);
        });
    });
});