function changeLanguage(language) {
      var codeSnippets = document.querySelectorAll(".codeSnippet");

      codeSnippets.forEach(function (snippet) {
        // Dependiendo del lenguaje seleccionado, puedes cambiar el contenido del codeSnippet
        switch (language) {
          case "javascript":
            snippet.innerHTML = '/* Código de JavaScript aquí */';
            break;
          case "python":
            snippet.innerHTML = '# Código de Python aquí';
            break;
          // Agrega más casos según tus necesidades
          default:
            break;
        }
      });

      hljs.highlightAll();
    }