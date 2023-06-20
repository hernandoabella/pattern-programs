document.addEventListener("DOMContentLoaded", function () {
  hljs.highlightAll();
  var darkMode = localStorage.getItem("darkMode");

  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }
});

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  if (element.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

var copyButton = document.querySelector(".copyButton");

copyButton.addEventListener("click", function () {
  var codeSnippet = document.querySelector(".codeSnippet");
  var codeText = codeSnippet.textContent;

  navigator.clipboard
    .writeText(codeText)
    .then(function () {
      copyButton.innerHTML = '<i class="fas fa-check"></i> Copiado';
      setTimeout(function () {
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Copiar patrón';
      }, 2000);
    })
    .catch(function (err) {
      console.log("No se pudo copiar el código", err);
    });
});

var showCodeButton = document.querySelector(".showCodeButton");
var codigoContainer = document.querySelector(".codigo");

showCodeButton.addEventListener("click", function () {
  if (codigoContainer.style.display === "block") {
    codigoContainer.style.display = "none";
    showCodeButton.textContent = `Mostrar código `;
  } else {
    codigoContainer.style.display = "block";
    showCodeButton.textContent = `Ocultar código`;
  }
});
