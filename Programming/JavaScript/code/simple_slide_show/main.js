window.addEventListener('DOMContentLoaded', function (e) { // wait until document is fully parsed
  var presentation = document.querySelector('hp-presentation');
  presentation.onclick = handlePresentationClick;
});


function handlePresentationClick(e) {
  var current = document.querySelector('hp-slide.active');
  var next = current.nextElementSibling;
  if (next) {
    current.classList.remove('active');
    next.classList.add('active');
  }
  else {
    alert('Back to start!');
    current.classList.remove('active');
    current.parentNode.firstElementChild.classList.add('active');
  }
}

