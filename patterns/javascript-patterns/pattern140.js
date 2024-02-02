// Pattern 140: ...

//     *
//    * *
//   *****
//  *     *
// *       *

let n = 5;
let x = n;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= 2 * n; j++) {
        if (j === x || j === n + i - 1) {
            row += '*';
        } else if (j >= x && j <= n + i - 1 && i === Math.floor(n / 2) + 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
    x--;
}
