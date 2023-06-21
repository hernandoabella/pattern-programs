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
