window.addEventListener('DOMContentLoaded', function (e) { // wait until document is fully parsed
  var presentation = document.querySelector('hp-presentation');
  presentation.onclick = handlePresentationClick;
  presentation.addEventListener('animationend', handleAnimationEnd, false);
});


function handlePresentationClick(e) {
  var current = document.querySelector('hp-slide.active');
  var next = current.nextElementSibling;
  if (next) { // !next===NULL
    current.classList.remove('active');
    next.classList.add('active');
    var aa = parseInt(next.getAttribute('data-autoadvance'));
    if (!isNaN(aa)) {
      setTimeout(function (e) {
        handlePresentationClick(e);
      }, aa);
    }
  }
}

function handleAnimationEnd(e) {
  var slide = e.target.closest('hp-slide');
  var aa = slide.getAttribute('data-autoadvance');
  if (aa == 'animationend' && slide.classList.contains('active')) {
    handlePresentationClick(e);
  }

}
