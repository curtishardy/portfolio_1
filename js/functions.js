function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 300,
        header = document.querySelector("hero-image");
    if (distanceY > shrinkOn) {
      $('.navbar').css('background-color', 'rgba(34,34,34,0.99)');
    } else {
      $('.navbar').css('background-color', 'transparent');
    }
  });
}
window.onload = init();
