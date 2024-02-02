// Pattern 109: ...

// *     *     *
// **   ***   **
// *** ***** ***
// *************
// *************
// *************
// *************

let n = 7;

let x = n;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j < 2 * n; j++) {
        if ((j >= x && j <= 2 * n - x) || j <= n - x + 1 || j >= n + x - 1) {
            row += "*";
        } else {
            row += " ";
        }
    }
    x--;
    console.log(row);
}
