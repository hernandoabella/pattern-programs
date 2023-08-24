## Hollow Diamond

### Code: 
```
function printHollowDiamond(rows) {
  // Print the upper half of the hollow diamond
  for (let i = 1; i <= rows; i++) {
    let line = "";

    // Add white spaces before the first asterisk
    for (let j = 1; j <= rows - i; j++) {
      line += " ";
    }

    // Add the first asterisk of the row
    line += "*";

    // Add white spaces between inner asterisks
    if (i > 1) {
      for (let k = 1; k <= 2 * (i - 1) - 1; k++) {
        line += " ";
      }
      line += "*";
    }

    // Print the row
    console.log(line);
  }

  // Print the lower half of the hollow diamond
  for (let i = rows - 1; i >= 1; i--) {
    let line = "";

    // Add white spaces before the first asterisk
    for (let j = 1; j <= rows - i; j++) {
      line += " ";
    }

    // Add the first asterisk of the row
    line += "*";

    // Add white spaces between inner asterisks
    if (i > 1) {
      for (let k = 1; k <= 2 * (i - 1) - 1; k++) {
        line += " ";
      }
      line += "*";
    }

    // Print the row
    console.log(line);
  }
}

// Call the function and specify the number of rows for the hollow diamond
printHollowDiamond(5);

```

### Result:

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