## Escalera descedente

### Código: 
```
function imprimirEscaleraDescendente(filas) {
  for (let i = filas; i >= 1; i--) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
      linea += '*';
    }
    console.log(linea);
  }
}

// Llamar a la función e indicar el número de filas para la escalera descendente
imprimirEscaleraDescendente(5);
```

### Resultado:

```
*****
****
***
**
*
```
