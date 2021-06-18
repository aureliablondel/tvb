//  Slideshow avec fondu enchaîné

$('.slides img').slice(0).hide();
    setInterval(function(){
      $('.slides > :first-child').fadeOut(1500).next('img').fadeIn(1500).end().appendTo('.slides');
      },4000);
