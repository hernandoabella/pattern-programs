## Escalera ascendente

### Código: 

```
function imprimirEscaleraAscendente(filas) {
  for (let i = 1; i <= filas; i++) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
      linea += '*';
    }
    console.log(linea);
  }
}

// Llamar a la función e indicar el número de filas para la escalera ascendente
imprimirEscaleraAscendente(5);
```

### Resultado:

```
*
**
***
****
*****
```
