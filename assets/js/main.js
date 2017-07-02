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
/*script for preloder percentage bar*/
(function(){
  function id(v){ return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0,
        tot = img.length;
    if(tot == 0) return doneLoading();

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      alignContainer()
      setTimeout(function(){
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());

function alignContainer() {
  var windowHeight = $(window).outerHeight(true);
  var containerHeight = $('.container').outerHeight(true);

  var valueOfMarginTop = (windowHeight - containerHeight)/2;
  if(valueOfMarginTop <0){
  valueOfMarginTop = 0;
  }
  $('.container').css({'margin-top':valueOfMarginTop});

  /*animation effects on mobile and mobile screen*/
  $('#mobile-animation').addClass('animated fadeInRight');
  $('#mobile-animation').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

      $('.mobile-slider-container').show().addClass('animated fadeIn');
  });
}


