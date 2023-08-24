## Equilateral Triangle

### Code:

```
function printEquilateralTriangle(rows) {
  // Iterate over each row of the triangle
  for (let i = 0; i < rows; i++) {
    let spaces = "";
    let stars = "";

    // Add white spaces before the stars
    for (let j = 0; j < rows - i - 1; j++) {
      spaces += " ";
    }

    // Add the stars
    for (let k = 0; k < 2 * i + 1; k++) {
      stars += "*";
    }

    // Print the row
    console.log(spaces + stars);
  }
}

// Call the function and specify the number of rows you want in the triangle
printEquilateralTriangle(5);
```

### Result:

```
    *
   ***
  *****
 *******
*********
```
