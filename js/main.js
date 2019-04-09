$(document).ready(function() {

    // $('.header-menu-mob__item--humburger').on('click', function() {
        // $('.menu__list, .menu__social').slideToggle(100, function(){
          // if($(this).css('display') === 'none'){
          // $(this).removeAttr('style')
          // };
      // });
    // })

    $(".header-menu-mob__item--humburger").click(function () {
      $(".menu-main").toggleClass("menu-open");
      $(".nav-bar").toggleClass("open-menu");
      $(".menu-main .bar").toggleClass("animate");
      // $("body").toggleClass("open-menu");
    }); 

    $.fn.animate_Text = function() {
      var string = this.text();
      return this.each(function(){
        var $this = $(this);
      $this.html(string.replace(/./g, '<span class="new">$&</span>'));
      $this.find('span.new').each(function(i, el){
      setTimeout(function(){ $(el).addClass('div_opacity'); }, 30 * i);
    });
    });
    };
    $('#example').show();
    $('#example').animate_Text(); 

    $('.spoiler__link').click(function(){ 
      $(this).parent().children('div.spoiler__content').toggle('fast');
      return false;
    });

    $('.products__show-all').on('click', function() {
        $('.product__invisible').slideToggle(500, function(){
          if($(this).css('display') === 'none'){
          $(this).removeAttr('style')
          };
      });
    })
        
  	$('.service__list').slick({
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    prevArrow: '<img class="prev-left" src="img/prev-left.png">',
    nextArrow: '<img class="prev-right" src="img/prev-right.png">',
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          adaptiveHeight: true,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.banner__list').slick({
    dots: true,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000, 
    adaptiveHeight: true,
    prevArrow: '<img class="left" src="img/banner-left.png">',
    nextArrow: '<img class="right" src="img/banner-right.png">',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.about-us__list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    prevArrow: '<img class="left-arrow" src="img/left-icon.png">',
    nextArrow: '<img class="right-arrow" src="img/right-icon.png">',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 9999,
    settings: "unslick"
    },
    {
      breakpoint: 767,
      setting:{
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
  });

  $('.presentation__work-list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    prevArrow: '<img class="arrow-left" src="img/left-icon.png">',
    nextArrow: '<img class="arrow-right" src="img/right-icon.png">',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 9999,
    settings: "unslick"
    },
    {
      breakpoint: 767,
      setting:{
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
  });

  $('[data-toggle]').on('click', function(e){
    var tgt = $(this).data('target');
    if (tgt && $(tgt).length > 0) {
      $(tgt).toggleClass('collapse');

      e.preventDefault();
      return false;
    }
  });

  var $menu = $('#menu');
  $(window).scroll(function(){
    if ( $(this).scrollTop() > -400 && $menu.hasClass('normal') ) {
      $menu.removeClass('normal').addClass('fix');
    }
    else if($(this).scrollTop() <= -400 && $menu.hasClass('fix')) {
      $menu.removeClass('fix').addClass('normal');
    }
  });  
});