## Escalera descedente

### Código: 
```
function printDescendingLadder(rows) {
  for (let i = rows; i >= 1; i--) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += '*';
    }
    console.log(line);
  }
}

// Call the function and specify the number of rows for the descending ladder
printDescendingLadder(5);
```

### Resultado:

```
*****
****
***
**
*
```
