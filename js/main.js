 var owl;
$(document).ready(function() {

  var swiper = new Swiper('.swiper1', {
    pagination: '.swiper-pagination',
    slidesPerView: "auto",
    spaceBetween: 45,
   nextButton: '.next-swiper',
    prevButton: '.prev-swiper'
  });
  var swiper2 = new Swiper('.swiper2', {
    pagination: '.swiper-pagination',
    slidesPerView: "auto",
    spaceBetween: 45,
    nextButton: '.next-swiper',
    prevButton: '.prev-swiper'
  });

  swiper2.params.control = swiper;
  swiper.params.control = swiper2;

  function customPager() {

    $.each(this.owl.userItems, function (i) {

      var titleData = $(this).attr('data-text');
      var paginationLinks = $('#sentence-demo .owl-controls .owl-page span');

    $(paginationLinks[i]).append(titleData);

    });
}
 var owl2 = $(".owl-work"),
      sentence = $('#sentence-demo'),
      diploms = $('.owl-diplom'),
      price = $('.owl-price');
 
  owl2.owlCarousel({
      items : 5, 
      itemsDesktop : [1500,4],
      itemsDesktopSmall : [1200,3],
      itemsTablet: false, 
      itemsMobile : [600,2]
  });
  sentence.owlCarousel({
     singleItem: true,
     afterInit: customPager,
     afterUpdate: customPager
  });

    diploms.owlCarousel({
      items : 8, 
      itemsDesktop : [1500,6],
      itemsDesktopSmall : [1200,5],
      itemsTablet: [991,4], 
      itemsMobile : [600,3]
  });
  price.owlCarousel({
      items : 7, 
      itemsDesktop : [1500,6],
      itemsDesktopSmall : [1200,5],
      itemsTablet: [991,4], 
      itemsMobile : [767,3]
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
  $('.countdown2').dsCountDown({
    endDate: new Date("March 25, 2016 22:57:30"),
    titleHours: 'часов', 
    titleMinutes: 'минут', 
    titleSeconds: 'секунд',
    titleDays: 'дней'
  });
  $('.countdown3').dsCountDown({
    endDate: new Date("May 10, 2016 22:57:30"),
    titleHours: 'часов', 
    titleMinutes: 'минут', 
    titleSeconds: 'секунд',
    titleDays: 'дней'
  });
});

$(document).ready(function() {
  $('.big_button, .medium_button, .more, .review-img, .fancybox').click(function(e) {
    e.preventDefault();
    var newHash = $(this).attr('data-target');
    window.location.hash = newHash;
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

$(function() {
  $('.menu-toggle').click(function(e) {
    if(!$('.nav').hasClass('active'))
      $('.nav').addClass('active');
  });
  $('.close-menu').click(function(e) {
    e.preventDefault();
    if($('.nav').hasClass('active'))
      $('.nav').removeClass('active');
  });
});

$(document).ready(function() {
  $(".fancybox-orbit").fancybox({
    padding : 40,
    openEffect  : 'elastic',
    closeEffect : 'elastic',
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

  $(".scroll_cont").mCustomScrollbar({theme:"dark-thick",autoDraggerLength: false});
});


$(function() {
  var top_show = 250;
  var delay = 1000; 
  $(document).ready(function() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });
});

$(function() {
  $(document).ready(function() {
    $("a.roll").click(function () {
      elementClick = $(this).attr("href")
      destination = $(elementClick).offset().top - 56;
      $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    });
  });
});

$.fn.drags = function(opt) {
  opt = $.extend({handle:"",cursor:"pointer"}, opt);

  if(opt.handle === "") {
      var $el = this;
  } else {
      var $el = this.find(opt.handle);
  }

  return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
      if(opt.handle === "") {
          var $drag = $(this).addClass('draggable');
      } else {
          var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
      }
      var z_idx = $drag.css('z-index'),
          drg_h = $drag.outerHeight(),
          drg_w = $drag.outerWidth(),
          pos_y = $drag.offset().top + drg_h - e.pageY,
          pos_x = $drag.offset().left + drg_w - e.pageX;
      $drag.css('z-index', 1000).parents().on("mousemove", function(e) {
          $('.draggable').offset({
              top:e.pageY + pos_y - drg_h,
              left:e.pageX + pos_x - drg_w
          }).on("mouseup", function() {
              $(this).removeClass('draggable').css('z-index', z_idx);
          });
      });
      e.preventDefault(); // disable selection
  }).on("mouseup", function() {
      if(opt.handle === "") {
          $(this).removeClass('draggable');
      } else {
          $(this).removeClass('active-handle').parent().removeClass('draggable');
      }
  });

}

$("#clbh_phone_div").drags().hover(function(){
    $(this).removeClass("cbh-static").addClass("cbh-hover");
},function(){
    $(this).removeClass("cbh-hover").addClass("cbh-static");
})

$(".swiper1 .swiper-slide a,.swiper2 .swiper-slide a").hover(function(){
  var index = $(this).parent().index();
  $(".swiper1 .swiper-wrapper .swiper-slide:eq("+index+") a,.swiper2 .swiper-wrapper .swiper-slide:eq("+index+") a").addClass("hover");
  },
function(){
  var index = $(this).parent().index();
  $(".swiper1 .swiper-wrapper .swiper-slide:eq("+index+") a,.swiper2 .swiper-wrapper .swiper-slide:eq("+index+") a").removeClass("hover");

})