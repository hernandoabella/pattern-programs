## Rombo

### Code: 
```
function printDiamond(rows) {
  // Print the upper half of the diamond
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= rows - i; j++) {
      line += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      line += "*";
    }
    console.log(line);
  }

  // Print the lower half of the diamond
  for (let i = rows - 1; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= rows - i; j++) {
      line += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      line += "*";
    }
    console.log(line);
  }
}

// Call the function and specify the number of rows for the diamond
printDiamond(5);

```

### Result:

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
