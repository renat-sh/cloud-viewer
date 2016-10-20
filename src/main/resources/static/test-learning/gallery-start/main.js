var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (var i = 1; i <= 5; i++) {
  var imgId = "pic" + i;
  var imgPath = "images/" + imgId + ".jpg";
  var newImage = document.createElement('img');
  newImage.setAttribute('src', imgPath);

  newImage.onclick = changeBigImage;
  thumbBar.appendChild(newImage);
}

function changeBigImage(e) {
  var imgPath = e.target.getAttribute('src');
  displayedImage.setAttribute('src', imgPath);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
  var btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    btn.textContent = 'Lighten';
    // overlay.setAttribute('class', 'overlay-grayed');
  } else {
    btn.setAttribute('class', 'dark');
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    btn.textContent = 'Darken';
    // overlay.setAttribute('class', 'overlay');
  }

};
