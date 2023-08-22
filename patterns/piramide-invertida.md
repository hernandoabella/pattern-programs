## Piramide invertida

### Código:

```
function imprimirPiramideInvertida(filas) {
  // Iterar sobre cada fila de la pirámide invertida
  for (let i = filas; i >= 1; i--) {
    let linea = "";

    // Agregar los asteriscos
    for (let j = 1; j <= 2 * i - 1; j++) {
      linea += "*";
    }

    // Imprimir la fila
    console.log(linea);
  }
}

// Llamar a la función e indicar el número de filas para la pirámide invertida
imprimirPiramideInvertida(5);
```

### Resultado:

```
*********
*******
*****
***
*
```
