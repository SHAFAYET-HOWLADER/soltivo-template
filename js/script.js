//banner slider
$('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows:false,
  });

  //progressbar

  $('.experince-per-one').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css('width',per+'%');
   $({animatedValue: 0}).animate({animatedValue: per},{
     duration: 1000,
     step: function(){
       $this.attr('per',Math.floor(this.animatedValue) +'%');
     },
     complete: function(){
      $this.attr('per', Math.floor(this.animatedValue) +'%');
    }
   });
  }) ;

  $('.experince-per-two').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css('width',per+'%');
   $({animatedValue: 0}).animate({animatedValue: per},{
     duration: 1000,
     step: function(){
       $this.attr('per',Math.floor(this.animatedValue) +'%');
     },
     complete: function(){
      $this.attr('per', Math.floor(this.animatedValue) +'%');
    }
   });
  }) ;

  $('.experince-per-three').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css('width',per+'%');
   $({animatedValue: 0}).animate({animatedValue: per},{
     duration: 1000,
     step: function(){
       $this.attr('per',Math.floor(this.animatedValue) +'%');
     },
     complete: function(){
      $this.attr('per', Math.floor(this.animatedValue) +'%');
    }
   });
  }) ;

  // service part slider
  $('.service-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,

    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      }
    ]
  });

    
// $('.process-slider').slick({
//        slidesToShow: 3,
//        slidesToScroll: 1,
//        autoplay: false,
//        autoplaySpeed: 2000,
//        dots: false,
//        arrows: false,
//      });