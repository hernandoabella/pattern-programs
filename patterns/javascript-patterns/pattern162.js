// *   *   *
// *  * *  *
// * *   * *
// **     **
// *       *

let n = 5;
let x = n;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= 2 * n - 1; j++) {
        if (j === 1 || j === 2 * n - 1 || j === x || j === 2 * n - x) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
    x--;
}
