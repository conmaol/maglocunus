window.addEventListener('DOMContentLoaded', function (e) { // wait until document is fully parsed
  setTimeout(function (e) { changeSlide(e); }, 1000);
});

function changeSlide(e) {
  var current = document.querySelector('hp-slide.active');
  var next = current.nextElementSibling;
  if (next) {
    current.classList.remove('active');
    next.classList.add('active');
    setTimeout(function (e) { changeSlide(e); }, 1000);
  }
   
}


