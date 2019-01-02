$(function() {

  //slider kısmı background

  var slider_items = $('.slider-item ul.slider-item-container > li'),
      slider_buttons = $('.slider-button ul li');

      slider_items.filter(':not(:first)').hide();
      slider_buttons.filter('first').addClass('active');
      slider_buttons.on('click', function(e){
        var index = $(this).index();
        slider_items.fadeOut(700).filter(':eq('+ index +')').fadeIn(700);
        slider_buttons.removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
  });

// product-list bşlıkları yok edip ikonları  getirme
$('.product-list ul li').hover(function() {
  $('.title', this).finish().fadeOut(700);
  $('.product-icon', this).finish().fadeIn(700);
}, function() {
  $('.title', this).fadeIn(700);
  $('.product-icon', this).fadeOut(700);
});



});
