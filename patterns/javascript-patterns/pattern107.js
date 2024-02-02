// Pattern 107: ...

// * * * * * * * * *
// *               *
// *   * * * * *   *
// *   *       *   *
// *   *   *   *   *
// *   *       *   *
// *   * * * * *   *
// *               *
// * * * * * * * * *

let n = 9;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if ((j <= x || j >= n - x + 1) && j % 2 === 1) {
            row += "* ";
        } else if ((j >= x && j <= n - x + 1) && i % 2 === 1) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
    if (i <= n / 2) {
        x++;
    } else {
        x--;
    }
}
