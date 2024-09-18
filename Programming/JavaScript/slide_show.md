# A simple slide show

Here is code for a simple slide presentation that allows the user to click between (attractively presented!) slides. There is also an option given for automatically switching between slides after a given period of time.

This is adapted from the Linked In Learning course *Interactive Animations with CSS and JavaScript*.

## index.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Blah</title>
    <link rel="stylesheet" href="style.css?v=1.0"
  </head>
  <body>
    <hp-content> <!-- custom HTML elements -->
      <hp-presentation>
        <hp-slide class="active">slide 1</hp-slide> <!-- note the important class value here -->
        <hp-slide>slide 2</hp-slide>
        <hp-slide>slide 3</hp-slide>
        <hp-slide>slide 4</hp-slide>
        <hp-slide>slide 5</hp-slide>
      </hp-presentation>
    </hp-content>
    <script src="main.js"></script>
  </body>
</html>
```

## style.css

```
html, body { /* always use these for consistency */
  margin: 0;
  padding: 0;
}

hp-content {
  display: flex;
  background-color: #f00;
  width: 100vw; /* 100% of the viewable width */
  height: 100vh;
  justify-content: center; /* horizontal centering of hp-presentation within hp-content */
  align-items: center; /* vertical centering of hp-presentation within hp-content */
}

hp-presentation {
  display: block;
  background-color: #fff;
  width: 80vmin; /* 80% of the minimum of viewable width and viewable height */
  height: 80vmin; /* ie. a square */
  border: .2em solid #000;
  border-radius: 1em; /* curvy corners */
}

hp-slide {
  display: none;
  width: 80%;
  height: 80%;
  margin: 10%; /* centre slide within parent hp-presentation */
  font-size: 8vmin;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
}

hp-slide.active {
  display: inline-block;
}
```
## main.js

```
window.addEventListener('DOMContentLoaded', function (e) { // wait until document is fully parsed
  var presentation = document.querySelector('hp-presentation');
  presentation.onclick = changeSlide;
});

function changeSlide(e) {
  var current = document.querySelector('hp-slide.active');
  var next = current.nextElementSibling;
  if (next) {
    current.classList.remove('active');
    next.classList.add('active');
  }
  else { // go back to start
    current.classList.remove('active');
    current.parentNode.firstElementChild.classList.add('active');
  }
}
```
Alternatively, the slides can be set up to switch automatically with the following JavaScript:

```
window.addEventListener('DOMContentLoaded', function (e) {
  setTimeout(function (e) { changeSlide(e); }, 1000); // wait 1 second
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
```

