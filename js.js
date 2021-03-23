$(document).ready(function () {
    
    var image = document.getElementsByClassName('capabilities-right');
new simpleParallax(image, {
	overflow: true,
    scale: 1.8
});
    
    var image = document.getElementsByClassName('capa-rev-left');
new simpleParallax(image, {
	overflow: true,
    scale: 1.6
});
    
    
    
var $content = $('header .content')
  , $blur    = $('header .overlay')
  , wHeight  = $(window).height();

$(window).on('resize', function(){
  wHeight = $(window).height();
});
    
    

window.requestAnimFrame = (function()
{
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function Scroller()
{
  this.latestKnownScrollY = 0;
  this.ticking            = false;
}

Scroller.prototype = {
 
  init: function() {
    window.addEventListener('scroll', this.onScroll.bind(this), false);
    $blur.css('background-image',$('header:first-of-type').css('background-image'));
  },


  onScroll: function() {
    this.latestKnownScrollY = window.scrollY;
    this.requestTick();
  },

  
  requestTick: function() {
    if( !this.ticking ) {
      window.requestAnimFrame(this.update.bind(this));
    }
    this.ticking = true;
  },

  update: function() {
    var currentScrollY = this.latestKnownScrollY;
    this.ticking       = false;
    
    
    var slowScroll = currentScrollY / 2
      , blurScroll = currentScrollY * 2
      , opaScroll = 1.4 - currentScrollY / 400;
//   if(currentScrollY > wHeight)
//     $('nav').css('position','fixed');
//   else
//     $('nav').css('position','absolute');
    
    $content.css({
      'transform'         : 'translateY(' + slowScroll + 'px)',
      '-moz-transform'    : 'translateY(' + slowScroll + 'px)',
      '-webkit-transform' : 'translateY(' + slowScroll + 'px)',
      'opacity' : opaScroll
    });
    
    $blur.css({
      'opacity' : blurScroll / wHeight
    });
  }
};


var scroller = new Scroller();  
scroller.init();
    
var isOpenMenu = false;    
$(".menu-icon").on("click", function() {
    if (isOpenMenu) {
        $(".menu-icon i").removeClass("fa-times");
        $(".menu-icon i").addClass("fa-bars");
        
        $("nav ul li:nth-child(1) a").removeClass("showing-li showing-li-a");
        $("nav ul li:nth-child(2) a").removeClass("showing-li showing-li-b");
        $("nav ul li:nth-child(3) a").removeClass("showing-li showing-li-c");
        $("nav ul li:nth-child(4) a").removeClass("showing-li showing-li-d");
        
        $("nav ul li:nth-child(1) a").addClass("closing-li showing-li-d");
        $("nav ul li:nth-child(2) a").addClass("closing-li showing-li-c");
        $("nav ul li:nth-child(3) a").addClass("closing-li showing-li-b");
        $("nav ul li:nth-child(4) a").addClass("closing-li showing-li-a");
        $("nav ul").toggleClass("showing").addClass("showing-transition");
    } else {
        $(".menu-icon i").removeClass("fa-bars");
        $(".menu-icon i").addClass("fa-times");
        
        $("nav ul li:nth-child(1) a").removeClass("closing-li showing-li-d");
        $("nav ul li:nth-child(2) a").removeClass("closing-li showing-li-c");
        $("nav ul li:nth-child(3) a").removeClass("closing-li showing-li-b");
        $("nav ul li:nth-child(4) a").removeClass("closing-li showing-li-a");
        
        $("nav ul").toggleClass("showing").removeClass("showing-transition");
        $("nav ul li:nth-child(1) a").addClass("showing-li showing-li-a");
        $("nav ul li:nth-child(2) a").addClass("showing-li showing-li-b");
        $("nav ul li:nth-child(3) a").addClass("showing-li showing-li-c");
        $("nav ul li:nth-child(4) a").addClass("showing-li showing-li-d");
    }
    isOpenMenu = !isOpenMenu;
            });
    
    
$("nav ul li").on("click", function() {
    if (isOpenMenu) {
        $(".menu-icon i").removeClass("fa-times");
        $(".menu-icon i").addClass("fa-bars");
        
        $("nav ul li:nth-child(1) a").removeClass("showing-li showing-li-a");
        $("nav ul li:nth-child(2) a").removeClass("showing-li showing-li-b");
        $("nav ul li:nth-child(3) a").removeClass("showing-li showing-li-c");
        $("nav ul li:nth-child(4) a").removeClass("showing-li showing-li-d");
        
        $("nav ul li:nth-child(1) a").addClass("closing-li showing-li-d");
        $("nav ul li:nth-child(2) a").addClass("closing-li showing-li-c");
        $("nav ul li:nth-child(3) a").addClass("closing-li showing-li-b");
        $("nav ul li:nth-child(4) a").addClass("closing-li showing-li-a");
        $("nav ul").toggleClass("showing").addClass("showing-transition");
    } else {
        $(".menu-icon i").removeClass("fa-bars");
        $(".menu-icon i").addClass("fa-times");
        
        $("nav ul li:nth-child(1) a").removeClass("closing-li showing-li-d");
        $("nav ul li:nth-child(2) a").removeClass("closing-li showing-li-c");
        $("nav ul li:nth-child(3) a").removeClass("closing-li showing-li-b");
        $("nav ul li:nth-child(4) a").removeClass("closing-li showing-li-a");
        
        $("nav ul").toggleClass("showing").removeClass("showing-transition");
        $("nav ul li:nth-child(1) a").addClass("showing-li showing-li-a");
        $("nav ul li:nth-child(2) a").addClass("showing-li showing-li-b");
        $("nav ul li:nth-child(3) a").addClass("showing-li showing-li-c");
        $("nav ul li:nth-child(4) a").addClass("showing-li showing-li-d");
    }
    isOpenMenu = !isOpenMenu;
            });
    

    
// Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })
    
    

    

    
    
    
});