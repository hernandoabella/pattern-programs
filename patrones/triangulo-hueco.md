## Triángulo hueco

### Código: 
```
function imprimirTrianguloHueco(filas) {
  // Iterar sobre cada fila del triángulo
  for (let i = 1; i <= filas; i++) {
    let espacios = "";
    let asteriscos = "";

    // Agregar espacios en blanco antes de los asteriscos
    for (let j = 0; j < filas - i; j++) {
      espacios += " ";
    }

    // Construir la cadena de asteriscos
    if (i === 1 || i === filas) {
      for (let k = 0; k < i * 2 - 1; k++) {
        asteriscos += "*";
      }
    } else {
      asteriscos += "*";
      for (let k = 0; k < (i - 2) * 2 + 1; k++) {
        asteriscos += " ";
      }
      asteriscos += "*";
    }

    // Imprimir la fila
    console.log(espacios + asteriscos);
  }
}
```

### Resultado:

```
    *
   * *
  *   *
 *     *
*********
```
