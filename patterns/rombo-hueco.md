## Rombo hueco

### Código: 
```
function imprimirRomboHueco(filas) {
  // Imprimir la mitad superior del rombo hueco
  for (let i = 1; i <= filas; i++) {
    let linea = "";

    // Agregar espacios en blanco antes de los asteriscos
    for (let j = 1; j <= filas - i; j++) {
      linea += " ";
    }

    // Agregar el primer asterisco de la fila
    linea += "*";

    // Agregar espacios en blanco entre los asteriscos internos
    if (i > 1) {
      for (let k = 1; k <= 2 * (i - 1) - 1; k++) {
        linea += " ";
      }
      linea += "*";
    }

    // Imprimir la fila
    console.log(linea);
  }

  // Imprimir la mitad inferior del rombo hueco
  for (let i = filas - 1; i >= 1; i--) {
    let linea = "";

    // Agregar espacios en blanco antes de los asteriscos
    for (let j = 1; j <= filas - i; j++) {
      linea += " ";
    }

    // Agregar el primer asterisco de la fila
    linea += "*";

    // Agregar espacios en blanco entre los asteriscos internos
    if (i > 1) {
      for (let k = 1; k <= 2 * (i - 1) - 1; k++) {
        linea += " ";
      }
      linea += "*";
    }

    // Imprimir la fila
    console.log(linea);
  }
}

// Llamar a la función e indicar el número de filas para el rombo hueco
imprimirRomboHueco(5);

```

### Resultado:

```
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
```