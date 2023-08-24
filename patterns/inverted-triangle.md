## Inverted triangle

### Code:

```
function printInvertedTriangle(rows) {
  // Iterate over each row of the inverted triangle
  for (let i = rows; i > 0; i--) {
    let spaces = "";
    let stars = "";

    // Add white spaces before the stars
    for (let j = 0; j < rows - i; j++) {
      spaces += " ";
    }

    // Add the stars
    for (let k = 0; k < 2 * i - 1; k++) {
      stars += "*";
    }

    // Print the row
    console.log(spaces + stars);
  }
}

// Call the function and specify the number of rows for the inverted triangle
printInvertedTriangle(5);
```

### Result:

```
*********
 *******
  *****
   ***
    *
```
