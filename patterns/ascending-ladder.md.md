## Ascending ladder

### Code: 

```
function printAscendingLadder(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += '*';
    }
    console.log(line);
  }
}

// Call the function and specify the number of rows for the ascending ladder
printAscendingLadder(5);
```

### Result:

```
*
**
***
****
*****
```
