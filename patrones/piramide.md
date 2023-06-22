## Triángulo equilátero

### Código:

```
function imprimirPiramide(filas) {
  // Iterar sobre cada fila de la pirámide
  for (let i = 1; i <= filas; i++) {
    let linea = "";

    // Agregar los asteriscos
    for (let j = 1; j <= 2 * i - 1; j++) {
      linea += "*";
    }

    // Imprimir la fila
    console.log(linea);
  }
}

// Llamar a la función e indicar el número de filas para la pirámide
imprimirPiramide(5);
```

### Resultado:

```
*
***
*****
*******
*********
```
