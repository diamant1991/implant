
$(document).ready(function() {
 
  var owl = $(".owl-work"),
      sentence = $('#sentence-demo'),
      diploms = $('.owl-diplom'),
      price = $('.owl-price');
 
  owl.owlCarousel({
      items : 5, 
      itemsDesktop : [1500,4],
      itemsDesktopSmall : [1200,3],
      itemsTablet: false, 
      itemsMobile : [400,2]
  });

  sentence.owlCarousel({
     singleItem: true
  });
  diploms.owlCarousel({
      items : 8, 
      itemsDesktop : [1500,6],
      itemsDesktopSmall : [1200,5],
      itemsTablet: [991,4], 
      itemsMobile : [400,3]
  });
  price.owlCarousel({
      items : 7, 
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

$(function() {
  var $menu = $(".nav");
  $(window).scroll(function(){
    if ( $(this).scrollTop() > 150 ){
      $menu.addClass("fixed");
    } 
    else{
      $menu.removeClass("fixed");
    }
  });
});

$(document).ready(function() {
  var navLi = $(".nav li");
  $('.section').waypoint(function(){
   var hash = $(this).attr('id');

   $('.nav__item-link').removeClass("active");
    $.each(navLi, function(){
     href = $(this).children('a').attr('href').slice(1);
     if (href==hash) {
      $(this).find('.nav__item-link').addClass("active");

     };
    })
  }, {offset:'25%'});
});

$('.nav__item-link').on('click',function (e) {
  e.preventDefault();
  var target = this.hash,
      $target = $(target);
  $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 55
  }, 1000, 'swing', function () {
      window.location.hash = target;
  });
});

jQuery(function($){
  $(".tel-mask").mask("+7 (999) 999-9999");
});

$(function() {
  $('.sent-check-item').click(function(event) {
    $('.sent-check-item').removeClass('active');
    $(this).addClass('active');
  });
});

jQuery(document).ready(function($){
  $('.countdown').dsCountDown({
    endDate: new Date("August 25, 2016 23:59:00"),
    titleHours: 'часов', 
    titleMinutes: 'минут', 
    titleSeconds: 'секунд',
    titleDays: 'дней'
  });
  $('.second-countdown').dsCountDown({
    endDate: new Date("March 25, 2016 22:57:30"),
    titleHours: 'часов', 
    titleMinutes: 'минут', 
    titleSeconds: 'секунд',
    titleDays: 'дней'
  });
});

/*$(document).ready(function() {
  $('.nav__item-link').click(function(e) {
    e.preventDefault();
    showSection($(this).attr('href'), true);
  });
  showSection(window.location.hash, false);
});*/

/*$(window).scroll(function() {
  checkSection()
});*/

/*function showSection(section, isAnimate){
  var direction = section.replace(/#/, ''),
      reqSection = $('.section').filter('[data-section="' + direction + '"]'),
      reqSectionPos = reqSection.offset().top;

  if (isAnimate) {
    $('body, html').animate({scrollTop: reqSectionPos}, 500);
  }
  else{
    $('body, html').scrollTop(reqSectionPos);
  }
}*/

/*function checkSection(){
  $('.section').each(function() {
    var $this = $(this),
        topEdge = $this.offset().top - 300,
        bottomEdge = topEdge + $this.height(),
        wScroll = $(window).scrollTop();

    if(topEdge < wScroll && bottomEdge > wScroll){
      var currendId = $this.data('section'),
          reqLink = $('.nav__item-link').filter('[href="#' + currendId + '"]')
      
      reqLink.closest('.nav__item').find('.nav__item-link').addClass('active');
      reqLink.closest('.nav__item').siblings().find('.nav__item-link').removeClass('active');
    }
  });
}*/

