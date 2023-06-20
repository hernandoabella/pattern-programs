document.addEventListener("DOMContentLoaded", function() {
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