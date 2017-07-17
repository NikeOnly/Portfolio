var triangle1 = document.querySelector('.wrapper1-triangle');
var triangle3 = document.querySelector('.wrapper3-triangle');
var header = document.querySelector('.header');

setInterval(function() {
  var borderWidth = document.documentElement.clientWidth;
  triangle1.style.borderRight = borderWidth + 'px solid transparent';
  triangle3.style.borderLeft = borderWidth + 'px solid transparent';
  element = borderWidth + 'px solid transparent';
}, 50);

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (scrolled > 50) {
    header.style.height = '40px';
    header.style.opacity = '0.6';
  }
  if (scrolled < 50) {
    header.style.height = '60px';
    header.style.opacity = '1';
  }
};
