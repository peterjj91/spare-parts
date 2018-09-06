
// main select js
$(document).ready(function() {
    $('select').selectpicker();
});

// affix header
$(document).ready(function(){
    $(".header").affix({
        offset: {
            top: ($('.header').outerHeight(true)) + 70
        }
    });
});

// slick
$(document).ready(function() {
    $('.promo-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });
});

// sidr menu
$(document).ready(function() {
    $('#right-menu').sidr({
        name: 'sidr-left',
        side: 'left',
        source: '.footer__nav__wrapper',
        onOpen: function() {
            $('.mobile-menu').addClass('active');
        },
        onClose: function() {
            $('.mobile-menu').removeClass('active');
        }
    });
});

$(document).mouseup(function (e){
    var container = $("#sidr-left");

    if (!container.is(e.target)
        && container.has(e.target).length === 0) {
        $.sidr('close', 'sidr-left');
    }
});

// anchor link
$('.anchor-scroll').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top-70
    }, 500);
    return false;
});

// range slider
$(document).ready(function () {
    // $("#range_48").ionRangeSlider({
    //     type: "double",
    //     min: 0,
    //     max: 100,
    //     from: 20,
    //     to: 80,
    //     postfix: " руб",
    // });
});

// product slider
$('.product-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    fade: true,
    speed: 300,
    lazyLoad: 'ondemand',
    asNavFor: '.product-nav',
    prevArrow: '<div class="slick-prev"><i class="i-chev-left-thin"></i><span class="sr-text">Previous</span></div>',
    nextArrow: '<div class="slick-next"><i class="i-chev-right-thin"></i><span class="sr-text">Next</span></div>'
});

$('.product-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    centerPadding: '0px',
    asNavFor: '.product-for',
    dots: false,
    // centerMode: true,
    draggable: true,
    speed: 200,
    focusOnSelect: true,
    prevArrow: '<div class="slick-prev"><i class="i-chev-left-thin"></i><span class="sr-text">Previous</span></div>',
    nextArrow: '<div class="slick-next"><i class="i-chev-right-thin"></i><span class="sr-text">Next</span></div>',
    responsive: [
        {
            breakpoint: 768,
            settings: {

            }
        }
    ]
});

//keeps thumbnails active when changing main image, via mouse/touch drag/swipe
$('.product-for').on('afterChange', function(event, slick, currentSlide, nextSlide){
    //remove all active class
    $('.product-nav .slick-slide').removeClass('slick-current');
    //set active class for current slide
    $('.product-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
});

// slider promo-item--product
$('#promo-item--product').slick({
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    infinite: false,
    centerPadding: '0px',
    dots: false,
    draggable: true,
    speed: 200,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 470,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('#promo-item--arrow-item .promo-item__arrow--left').click(function(){
    $('#promo-item--product').slick('slickPrev');
});

$('#promo-item--arrow-item .promo-item__arrow--right').click(function(){
    $('#promo-item--product').slick('slickNext');
});

// slider promo-item--product
$('#promo-item--certificate').slick({
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    infinite: false,
    centerPadding: '0px',
    dots: false,
    draggable: true,
    speed: 200,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 470,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('#promo-item--arrow-certificate .promo-item__arrow--left').click(function(){
    $('#promo-item--certificate').slick('slickPrev');
});

$('#promo-item--arrow-certificate .promo-item__arrow--right').click(function(){
    $('#promo-item--certificate').slick('slickNext');
});

// stack table
$('.stacktable').stacktable();

// counter
$(document).ready(function(){
    $('.btn-number').click(function(e){
        e.preventDefault();

        fieldName = $(this).attr('data-field');
        type      = $(this).attr('data-type');
        var input = $("input[name='"+fieldName+"']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if(type == 'minus') {

                if(currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                }
                if(parseInt(input.val()) == input.attr('min')) {
                    $(this).attr('disabled', true);
                }

            } else if(type == 'plus') {

                if(currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                if(parseInt(input.val()) == input.attr('max')) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });
    $('.promo-count__number').focusin(function(){
        $(this).data('oldValue', $(this).val());
    });
    $('.promo-count__number').change(function() {
        minValue =  parseInt($(this).attr('min'));
        maxValue =  parseInt($(this).attr('max'));
        valueCurrent = parseInt($(this).val());

        name = $(this).attr('name');
        if(valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if(valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }
    });
});

// header mobile menu toggle
$(".header__catalog li").on("click", function() {
    // $(".promo-news--side").removeClass("active");
    $(this).toggleClass('active').siblings().removeClass('active');
});

$("#header__catalog__engine").on("click", function() {
    $("#side-engine").toggleClass('active').siblings("active").removeClass("active");
});
$("#header__catalog__loadres").on("click", function() {
    $("#side-loaders").toggleClass('active').siblings("active").removeClass("active");
});
$("#header__catalog__gearbox").on("click", function() {
    $("#side-gearbox").toggleClass('active').siblings("active").removeClass("active");
});
$("#header__catalog__connection").on("click", function() {
    $("#side-articulation").toggleClass('active').siblings("active").removeClass("active");
});
$("#header__catalog__filter").on("click", function() {
    $("#side-filter").toggleClass('active').siblings("active").removeClass("active");
});
$("#header__catalog__oil").on("click", function() {
    $("#side-oil").toggleClass('active').siblings("active").removeClass("active");
});

// header__catalog__engine
// header__catalog__loadres
// header__catalog__gearbox
// header__catalog__connection
// header__catalog__filter
// header__catalog__oil