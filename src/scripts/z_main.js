
$(document).ready(function() {
    $('select').selectpicker();
});

$(document).ready(function() {
    $('.promo-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });
});

$(document).ready(function () {
    $("#range_48").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 20,
        to: 80,
        postfix: " руб",
    });
});
