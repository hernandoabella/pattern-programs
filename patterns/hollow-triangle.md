## Hollow Triangle

### Code: 
```
function printHollowTriangle(rows) {
  // Iterate over each row of the triangle
  for (let i = 1; i <= rows; i++) {
    let spaces = "";
    let stars = "";

    // Add white spaces before the stars
    for (let j = 0; j < rows - i; j++) {
      spaces += " ";
    }

    // Build the string of stars
    if (i === 1 || i === rows) {
      for (let k = 0; k < i * 2 - 1; k++) {
        stars += "*";
      }
    } else {
      stars += "*";
      for (let k = 0; k < (i - 2) * 2 + 1; k++) {
        stars += " ";
      }
      stars += "*";
    }

    // Print the row
    console.log(spaces + stars);
  }
}

printHollowTriangle(5);
```

### Result:

```
    *
   * *
  *   *
 *     *
*********
```
