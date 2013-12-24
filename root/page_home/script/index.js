var time = 1000;

$(document).ready(function() {
    // animate the landing text to fade in and move down slightly
    $("#uwaft_slogan").animate({top: "44%", opacity: 1.0}, time, function() {
        // when the text is done animating, animate certain words to a green color
        $("#uwaft_slogan span").animate({color:"#5EBA40"}, time, function() {
            setTimeout(function() {
                $("#uwaft_slogan").animate({opacity:0.0}, time);
                $("#blurred_image").animate({opacity:0.0}, time, function() {
                    setTimeout(function() {
                        $(".car_info").animate({opacity:1.0}, time);
                    }, 500)
                });
            }, 1000);
        });
    });
});