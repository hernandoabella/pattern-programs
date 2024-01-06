document.addEventListener("DOMContentLoaded", function () {
  hljs.highlightAll();
  applyDarkMode();
  setupShowCodeButtons();
  setupScrollToTopButton();
  generateCards();
});

function applyDarkMode() {
  var darkMode = localStorage.getItem("darkMode");
  var element = document.body;

  if (darkMode === "enabled") {
    element.classList.add("dark-mode");
    cambiarLogo("logo-dark.png");
  }
}

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

function setupScrollToTopButton() {
  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    mybutton.style.display =
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
        ? "block"
        : "none";
  }

  mybutton.addEventListener("click", function () {
    topFunction();
  });

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

function generateCards() {
  const cardData = [
    { title: "Pattern One", pattern: "*\n***\n*****\n*******\n*********" },
    { title: "Pattern Two", pattern: "*\n**\n***\n****\n*****" },
    { title: "Pattern Three", pattern: "*\n***\n*****\n*******\n*********" },
    // Add more card data as needed
  ];

  const container = document.getElementById("cards-container");

  cardData.forEach((data) => {
    const card = generateCard(data.title, data.pattern);
    container.appendChild(card);
  });
}

function generateCard(title, pattern) {
  const card = document.createElement("div");
  card.className = "card";

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  const patternElement = document.createElement("pre");
  patternElement.className = "codeSnippet";
  patternElement.textContent = pattern;

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "card-btns";

  const copyButton = document.createElement("button");
  copyButton.className = "copyButton";
  copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy code';

  const showCodeButton = document.createElement("button");
  showCodeButton.className = "showCodeButton";
  showCodeButton.innerHTML = '<i class="fas fa-code"></i> Show code';

  const codigoContainer = document.createElement("div");
  codigoContainer.className = "codigo";
  codigoContainer.style.display = "none";

  const codeElement = document.createElement("pre");
  codeElement.innerHTML = `<code>${title}</code>`;

  copyButton.addEventListener("click", function () {
    copyCodeToClipboard(patternElement.textContent);
  });

  // Appending elements to the card
  buttonsContainer.appendChild(copyButton);
  buttonsContainer.appendChild(showCodeButton);
  codigoContainer.appendChild(codeElement);

  card.appendChild(titleElement);
  card.appendChild(patternElement);
  card.appendChild(buttonsContainer);
  card.appendChild(codigoContainer);

  return card;
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
