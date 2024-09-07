$(document).ready(function() {

  $('.mobile-wrap').on('click', function() {
    $('.line-burger').toggleClass('line-active');
    $('.header__list').slideToggle();
  });

  $(window).resize(function() {
    if ($(window).width() > 1350) {
      $('.header__list').attr('style', '');
      $('.line-burger').removeClass('line-active');
    }
  });

})

$(document).on('click', '.header__link, .info__btn', function() {
  let target = $(this).attr('href');
  let pos = target.indexOf('#');
  if (pos !== -1) {
    target = target.substring(pos);
    let coordsScroll = $(target).offset().top
    $('html, body').animate({
      scrollTop: coordsScroll
    }, 800);
    if ($(window).width() < 768 && $(this).hasClass('header__link')) {
      $('.header__list').slideUp();
      $('.line-burger').removeClass('line-active');
    }
    return false;
  }
})
