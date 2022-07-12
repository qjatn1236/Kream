$(document).ready(function () {
  $('.event_slide').slick({
    dots: false,
    arrows: false,
    autoplay: true,
  });

  //   $('.business_btn').click(function () {
  //     $('.business_wrap').stop().slideToggle();
  //   });

  $('.business_btn').click(function () {
    if ($('.business_wrap').css('display') == 'none') {
      $('.business_wrap').show();
    } else {
      $('.business_wrap').hide();
    }
  });

  $('header .navi_open').click(function (e) {
    e.preventDefault();
    $('.navi_area .navi').css('right', '0');
    $('.navi_area').css('position', 'fixed');
    $('body').css('overflow', 'hidden');
  });

  $('.navi_close').click(function (e) {
    e.preventDefault();
    $('.navi_area .navi').css('right', '-80%');
    $('.navi_area').css('position', 'relative');
    $('body').css('overflow', 'scroll');
  });
});
