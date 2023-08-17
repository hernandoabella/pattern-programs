## Triángulo hueco invertido


### Código: 
```
function imprimirTrianguloConBorde(filas) {
  // Imprimir la primera línea con asterisco completo
  let linea = "";
  for (let i = 0; i < 2 * filas - 1; i++) {
    linea += "*";
  }
  console.log(linea);

  // Imprimir las filas del triángulo invertido
  for (let i = filas - 2; i >= 1; i--) {
    linea = "*"; // Iniciar la línea con asterisco

    // Construir el contenido de la línea
    for (let j = 1; j < 2 * filas - 2; j++) {
      if (j === i || j === 2 * filas - 2 - i) {
        linea += " "; // Agregar espacio en blanco en los bordes
      } else {
        linea += "*"; // Agregar asterisco en el interior
      }
    }

    linea += "*"; // Agregar asterisco al final de la línea
    console.log(linea);
  }

  // Imprimir la última línea con asterisco completo
  linea = "";
  for (let i = 0; i < 2 * filas - 1; i++) {
    linea += "*";
  }
  console.log(linea);
}

imprimirTrianguloConBorde(5);

```

### Resultado:

```
*********
*** * ***
** *** **
* ***** *
*********
```