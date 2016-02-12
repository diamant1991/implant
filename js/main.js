$(document).ready(function() {
 
  var owl = $(".owl-work"),
      sentence = $('#sentence-demo'),
      diploms = $('.owl-diplom');
 
  owl.owlCarousel({
      items : 5, 
      itemsDesktop : [1500,4],
      itemsDesktopSmall : [1200,3],
      itemsTablet: false, 
      itemsMobile : [400,2]
  });

  sentence.owlCarousel({
     items: 1
  });
  diploms.owlCarousel({
      items : 8, 
      itemsDesktop : [1500,6],
      itemsDesktopSmall : [1200,5],
      itemsTablet: [991,4], 
      itemsMobile : [400,3]
  });
  
  $("#next-sen").click(function(){
    sentence.trigger('owl.next');
  })
  $("#prev-sen").click(function(){
    sentence.trigger('owl.prev');
  })
  
  $(".next").click(function(){
    $(this).closest('.carousel-wrapper').find('.owl-carousel').trigger('owl.next');
  })
  $(".prev").click(function(){
    $(this).closest('.carousel-wrapper').find('.owl-carousel').trigger('owl.prev');
  })
 
});