$(".thumbnail").hover(function(){
  $(this).find(".thumbOverlay").fadeIn( 200 );
}, function(){
  $(this).find(".thumbOverlay").fadeOut( 200 );
});

//Remove all the lines below for default automatic transition
$('.carousel').carousel('pause');
$('.carousel-control-next').click(function(){
  $('.carousel').carousel('next');
});
$('.carousel-control-prev').click(function(){
  $('.carousel').carousel('prev');
});