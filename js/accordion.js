$(document).ready(function() {
  $('.section-catalog__period').click(function(){
    if($('.section-catalog__period-list').hasClass ('open-one')) {
      $('.section-catalog__period').not($(this)).removeClass('section-catalog__period_active');
      $('.section-catalog__period-content').not($(this)).slideUp(300);
    }

    $(this).toggleClass('section-catalog__period_active').next('.section-catalog__period-content').slideToggle(300);
  })
})
