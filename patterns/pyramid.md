## Simple Pyramid

### Code:

```
function printPyramid(rows) {
  // Iterate over each row of the pyramid
  for (let i = 1; i <= rows; i++) {
    let line = "";

    // Add the stars
    for (let j = 1; j <= 2 * i - 1; j++) {
      line += "*";
    }

    // Print the row
    console.log(line);
  }
}

// Call the function and specify the number of rows for the pyramid
printPyramid(5);
```

### Result:

```
*
***
*****
*******
*********
```
