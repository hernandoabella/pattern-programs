## Triángulo hueco

### Código: 
```
function imprimirRombo(filas) {
  // Imprimir la mitad superior del rombo
  for (let i = 1; i <= filas; i++) {
    let linea = "";
    for (let j = 1; j <= filas - i; j++) {
      linea += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      linea += "*";
    }
    console.log(linea);
  }

  // Imprimir la mitad inferior del rombo
  for (let i = filas - 1; i >= 1; i--) {
    let linea = "";
    for (let j = 1; j <= filas - i; j++) {
      linea += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      linea += "*";
    }
    console.log(linea);
  }
}

// Llamar a la función e indicar el número de filas para el rombo
imprimirRombo(5);
```

### Resultado:

```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```
