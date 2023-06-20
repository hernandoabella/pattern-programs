var copyButtons = document.querySelectorAll(".copyButton");

copyButtons.forEach(function (copyButton) {
  copyButton.addEventListener("click", function () {
    var card = this.parentNode;
    var codeSnippet = card.querySelector(".codeSnippet");

    var range = document.createRange();
    range.selectNode(codeSnippet);

    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand("copy");
      copyButton.textContent = "¡Copiado!";
    } catch (err) {
      console.log("No se pudo copiar el código", err);
    }

    selection.removeAllRanges();
  });

  copyButton.addEventListener("mouseout", function () {
    copyButton.textContent = "Copiar";
  });
});


function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }