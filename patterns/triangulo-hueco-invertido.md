## Triángulo hueco invertido


### Código: 
function imprimirTrianguloHuecoInvertido(filas) {
  // Iterar sobre cada fila del triángulo
  for (let i = filas; i >= 1; i--) {
    let espacios = "";
    let asteriscos = "";

    // Agregar espacios en blanco antes de los asteriscos
    for (let j = 0; j < filas - i; j++) {
      espacios += " ";
    }

    // Construir la cadena de asteriscos
    if (i === filas || i === 1) {
      for (let k = 0; k < 2 * i - 1; k++) {
        asteriscos += "*";
      }
    } else {
      asteriscos += "*";
      for (let k = 0; k < 2 * i - 3; k++) {
        asteriscos += " ";
      }
      asteriscos += "*";
    }

    // Imprimir la fila
    console.log(espacios + asteriscos);
  }
}


imprimirTrianguloHuecoInvertido(5);
```

### Resultado:

```
*********
 *     *
  *   *
   * *
    *
```