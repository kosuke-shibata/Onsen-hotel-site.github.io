$(function() {
  $('.onsen__img img:nth-child(n+2)').hide();
  setInterval(function() {
    $(".onsen__img img:first-child").fadeOut(2000);
    $(".onsen__img img:nth-child(2)").fadeIn(2000);
    $(".onsen__img img:first-child").appendTo(".onsen__img");
  }, 4000);
  
  $('.dishes__img img:nth-child(n+2)').hide();
  setInterval(function() {
    $(".dishes__img img:first-child").fadeOut(2000);
    $(".dishes__img img:nth-child(2)").fadeIn(2000);
    $(".dishes__img img:first-child").appendTo(".dishes__img");
  }, 4000);
})

$('.menu-button').on('click', function(){
  if ($('.menu-command').hasClass('menu-open')) {
    $('.menu-command').removeClass('menu-open');
  } else {
    $('.menu-command').addClass('menu-open');
  }
});
