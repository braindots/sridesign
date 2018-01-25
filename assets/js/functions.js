$( document ).ready(function() {

  angleCalc();

   var $container = $('#work-wrap').isotope({
    itemSelector : '.work-item',
    isFitWidth: true
  });

  // $(window).smartresize(function(){
  //   $container.isotope({
  //     columnWidth: '.work-item'
  //   });
  // });
  
  $container.isotope({ filter: '*' });

    // filter items on button click
  $('#filters').on( 'click', 'a', function(e) {
  	e.preventDefault();
  	e.stopPropagation();
  	if ( $(this).hasClass('active') ) {
        $(this).removeClass('active');
    } else {
        $('#filters a.active').removeClass('active');
        $(this).addClass('active');    
    }
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });

  });
  
	$('#sidemenu').affix({
	    offset:{
	        top: $('header').outerHeight(),
	        bottom: $('footer').outerHeight() + 50
	    }
	});

});

$(window).scroll(function(){
	
	var wScroll = $(this).scrollTop();
	
	if (wScroll > ($(this).height() / 3)) {
	
		$('.fixed-navbar, .navbar-lockup').addClass('nav-fix');

	}
	
	else {
		
		$('.fixed-navbar, .navbar-lockup').removeClass('nav-fix');
		
	}

});

$('.mobile-nav-toggle').click(function(){
	
	if (!($(this).hasClass('nav-open'))) {
	
		$(this).addClass('nav-open');
	
		$('.slide-out-nav, .fixed-navbar, .mobile-shift').addClass('nav-open');
	
	}
	
	else {
		
		$(this).removeClass('nav-open');
		
		$('.slide-out-nav, .fixed-navbar, .mobile-shift').removeClass('nav-open');
		
	}
		
});

function angleCalc() {
	
	var opposite = $('.slide-out-nav').height(),
			adjacent = $('.slide-out-nav').width(),
			radian = Math.atan(opposite / adjacent),
			angle = (90 - radian * (180 / Math.PI)) * -1;
		
		$('.mobile-nav-slice').css({
			
			'transform' : 'rotate('+ angle +'deg)'
		
		});
		
}

    // $(".nav-tabs>li").click(function(e) {
    //     e.preventDefault();
    //     $(this).siblings('li.active').removeClass("active");
    //     $(this).addClass("active");
    //     var index = $(this).index();
    //     $("div.tab-pane").removeClass("active");
    //     $("div.tab-pane").eq(index).addClass("active");
    // });

        $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });




 // var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
 //    var stickyHeight = sticky.outerHeight();
 //    var stickyTop = stickyWrapper.offset().top;
 //    if (scrollElement.scrollTop() >= stickyTop){
 //      stickyWrapper.height(stickyHeight);
 //      sticky.addClass("is-sticky");
 //    }
 //    else{
 //      sticky.removeClass("is-sticky");
 //      stickyWrapper.height('auto');
 //    }
 //  };
  
  // Find all data-toggle="sticky-onscroll" elements
  // $('[data-toggle="sticky-onscroll"]').each(function() {
  //   var sticky = $(this);
  //   var stickyWrapper = $('<div>').addClass('sticky-wrapper'); .before(stickyWrapper);
  //   sticky.addClass('sticky');
    
    // Scroll & resize events
    // $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
    //   stickyToggle(sticky, stickyWrapper, $(this));
    // });
    
    // On page load
  //   stickyToggle(sticky, stickyWrapper, $(window));
  // });