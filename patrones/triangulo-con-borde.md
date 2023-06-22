## Triángulo hueco invertido


### Código: 
function imprimirTrianguloConBorde(filas) {
  // Imprimir la primera línea con asterisco completo
  let linea = "";
  for (let i = 0; i < 2 * filas - 1; i++) {
    linea += "*";
  }
  console.log(linea);

  // Iterar sobre cada fila del triángulo
  for (let i = 1; i < filas - 1; i++) {
    linea = "*"; // Iniciar la línea con asterisco

    // Construir la parte interior de la línea
    for (let j = 1; j < 2 * filas - 2; j++) {
      if (j === i || j === 2 * filas - 2 - i) {
        linea += "*"; // Agregar asterisco en los bordes
      } else {
        linea += " "; // Agregar espacio en blanco en el interior
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
**     **
* *   * *
*  * *  *
*********
```