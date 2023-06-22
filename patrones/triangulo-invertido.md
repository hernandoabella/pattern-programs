## Triángulo invertido

### Código: 
```
function imprimirTrianguloInvertido(filas) {
  // Iterar sobre cada fila del triángulo
  for (let i = filas; i > 0; i--) {
    let espacios = "";
    let asteriscos = "";

    // Agregar espacios en blanco antes de los asteriscos
    for (let j = 0; j < filas - i; j++) {
      espacios += " ";
    }

    // Agregar los asteriscos
    for (let k = 0; k < 2 * i - 1; k++) {
      asteriscos += "*";
    }

    // Imprimir la fila
    console.log(espacios + asteriscos);
  }
}

// Llamar a la función e indicar el número de filas que deseas en el triángulo invertido
imprimirTrianguloInvertido(5);
```

### Resultado:

```
*********
 *******
  *****
   ***
    *
```
