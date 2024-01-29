document.addEventListener("DOMContentLoaded", function () {
  hljs.highlightAll();
});

const pattern = document.querySelector(".pattern");
const codeSnippet = document.querySelector(".codeSnippet");
const copyBtn = document.querySelector(".copyButton");

copyBtn.addEventListener("click", copySnippet);
pattern.addEventListener("click", copyPattern);

function copySnippet() {
  const copyText = codeSnippet.querySelector("code");

  const textarea = document.createElement("textarea");
  textarea.value = copyText.innerText;
  document.body.appendChild(textarea);

  textarea.select();
  textarea.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(textarea);

  alert("Copied the text: " + copyText.innerText);
}

function copyPattern() {
  const patternText = pattern.innerText;

  const textarea = document.createElement("textarea");
  textarea.value = patternText;
  document.body.appendChild(textarea);

  textarea.select();
  textarea.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(textarea);

  alert("Pattern copied: " + patternText);
}