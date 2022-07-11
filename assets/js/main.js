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
});
