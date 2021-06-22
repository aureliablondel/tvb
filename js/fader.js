//  Slideshow avec fondu enchaîné pour écran > 1024px

$('.slides img').slice(0).hide();
if($(window).width()>1024){
    setInterval(function(){      
      $('.slides > :first-child').fadeOut(1500).next('img').fadeIn(1500).end().appendTo('.slides');
      },4000);}
