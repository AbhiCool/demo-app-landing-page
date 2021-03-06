/*script for facebook like button*/
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


/*script for twitter follow button*/
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

/*script for centering div to the center of page*/
$(window).on('resize', function() {
  alignContainer();
});


$(document).ready(function() {
   $('body').jpreLoader({
       loaderVPos: '50%',
       autoClose: true
   }, function () { //callback function
    alignContainer();
   });
});

function alignContainer() {
  var windowHeight = $(window).outerHeight(true);
  var containerHeight = $('.container').outerHeight(true);

  var valueOfMarginTop = (windowHeight - containerHeight)/2;
  if(valueOfMarginTop < 0){
  valueOfMarginTop = 0;
  }
  $('.container').animate({'margin-top':valueOfMarginTop});

  /*animation effects on mobile and mobile screen*/
  $('#mobile-animation').addClass('animated fadeInRight');
  $('#mobile-animation').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('.mobile-slider-container').show().addClass('animated fadeIn');
  });
}
