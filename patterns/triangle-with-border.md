## Triangle with border


### Code: 
```
function printTriangleWithBorder(rows) {
  // Print the first line with full asterisks
  let line = "";
  for (let i = 0; i < 2 * rows - 1; i++) {
    line += "*";
  }
  console.log(line);

  // Print the rows of the inverted triangle
  for (let i = rows - 2; i >= 1; i--) {
    line = "*"; // Start the line with an asterisk

    // Build the content of the line
    for (let j = 1; j < 2 * rows - 2; j++) {
      if (j === i || j === 2 * rows - 2 - i) {
        line += " "; // Add a space in the borders
      } else {
        line += "*"; // Add an asterisk in the interior
      }
    }

    line += "*"; // Add an asterisk at the end of the line
    console.log(line);
  }

  // Print the last line with full asterisks
  line = "";
  for (let i = 0; i < 2 * rows - 1; i++) {
    line += "*";
  }
  console.log(line);
}

printTriangleWithBorder(5);
```

### Result:

```
*********
*** * ***
** *** **
* ***** *
*********
```