// Pattern 124: ...

//       **
//       **
//     *    *
//     *    *
//   *        *
//   *        *
// *            *

const n = 7;
let x = n;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= 2 * n; j++) {
        if (j === x || j === 2 * n - x + 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
    if (i % 2 === 0) {
        x -= 2;
    }
}
