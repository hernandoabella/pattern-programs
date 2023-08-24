## Inverted pyramid

### Code:

```
function printInvertedPyramid(rows) {
  // Iterate over each row of the inverted pyramid
  for (let i = rows; i >= 1; i--) {
    let line = "";

    // Add the stars
    for (let j = 1; j <= 2 * i - 1; j++) {
      line += "*";
    }

    // Print the row
    console.log(line);
  }
}

// Call the function and specify the number of rows for the inverted pyramid
printInvertedPyramid(5);
```

### Result:

```
*********
*******
*****
***
*
```
