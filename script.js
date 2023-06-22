document.addEventListener("DOMContentLoaded", function () {
  hljs.highlightAll();
  var darkMode = localStorage.getItem("darkMode");

  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
    cambiarLogo("logo-dark.png");
  }
});

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  if (element.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    cambiarLogo("logo-dark.png");
  } else {
    localStorage.setItem("darkMode", "disabled");
    cambiarLogo("logo-light.png");
  }
}

function cambiarLogo(nombreLogo) {
  var logo = document.querySelector("header img");
  logo.src = "./images/" + nombreLogo;
}

var showCodeButtons = document.querySelectorAll(".showCodeButton");

showCodeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var codigoContainer = button.parentNode.nextElementSibling;
    if (codigoContainer.style.display === "block") {
      codigoContainer.style.display = "none";
      button.textContent = `Mostrar código`;
    } else {
      codigoContainer.style.display = "block";
      button.textContent = `Ocultar código`;
    }
  });
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Obtener todos los codeSnippets
var codeSnippets = document.querySelectorAll(".codeSnippet");

// Agregar evento de clic a cada codeSnippet
codeSnippets.forEach(function (snippet) {
  snippet.addEventListener("click", function () {
    // Obtener el código del codeSnippet actual
    var code = this.innerHTML;

    // Crear un elemento de textarea temporal
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = code;
    document.body.appendChild(tempTextarea);

    // Seleccionar el contenido del textarea temporal
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el contenido del textarea al portapapeles
    document.execCommand("copy");

    // Eliminar el textarea temporal
    document.body.removeChild(tempTextarea);

    alert("¡Patrón copiado!");
  });
});
