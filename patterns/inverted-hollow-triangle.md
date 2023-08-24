## Inverted hollow triangle


### Code: 
function printInvertedHollowTriangle(rows) {
  // Iterate over each row of the inverted triangle
  for (let i = rows; i >= 1; i--) {
    let spaces = "";
    let stars = "";

    // Add white spaces before the stars
    for (let j = 0; j < rows - i; j++) {
      spaces += " ";
    }

    // Build the string of stars
    if (i === rows || i === 1) {
      for (let k = 0; k < 2 * i - 1; k++) {
        stars += "*";
      }
    } else {
      stars += "*";
      for (let k = 0; k < 2 * i - 3; k++) {
        stars += " ";
      }
      stars += "*";
    }

    // Print the row
    console.log(spaces + stars);
  }
}

printInvertedHollowTriangle(5);
```

### Result:

```
*********
 *     *
  *   *
   * *
    *
```