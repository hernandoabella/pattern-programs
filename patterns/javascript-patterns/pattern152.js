
// *       *
// * *   * *
// *   *   *
// *       *
// *       *

let n = 5;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (j === 1 || j === n || (j === x || j === n - x + 1) && i <= Math.floor(n / 2) + 1) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    x++;
    console.log(row);
}
