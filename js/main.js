$(document).ready(function() {
 
  var owl = $(".owl-work");
 
  owl.owlCarousel({
      items : 5, 
      itemsDesktop : [1500,4],
      itemsDesktopSmall : [1200,3],
      itemsTablet: false, 
      itemsMobile : [400,2]
  });
 
  
  $(".next").click(function(){
    $(this).closest('.carousel-wrapper').find('.owl-carousel').trigger('owl.next');
  })
  $(".prev").click(function(){
    $(this).closest('.carousel-wrapper').find('.owl-carousel').trigger('owl.prev');
  })
 
});