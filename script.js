document.addEventListener("DOMContentLoaded", function () {
  hljs.highlightAll();
});

function setupShowCodeButtons() {
  var showCodeButtons = document.querySelectorAll(".showCodeButton");

  showCodeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleCodeVisibility(button);
    });
  });
}

function toggleCodeVisibility(button) {
  var codigoContainer = button.parentNode.nextElementSibling;

  if (codigoContainer.style.display === "block") {
    codigoContainer.style.display = "none";
    button.innerHTML = '<i class="fas fa-code"></i> Show code';
  } else {
    codigoContainer.style.display = "block";
    button.innerHTML = '<i class="fas fa-code"></i> Hide code';
  }
}

function copyCodeToClipboard(code) {
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = code;
  document.body.appendChild(tempTextarea);

  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(tempTextarea);

  alert("Pattern copied!");
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}