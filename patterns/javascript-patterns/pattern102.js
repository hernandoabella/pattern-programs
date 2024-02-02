// Pattern 102: ...

// *********
//  *     *
//   *   *
//    * *
//     *

let n = 5;
let x = 1;
let y = 2 * n - 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j < 2 * n; j++) {
        if (j === x || j === y || i === 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);
    x++;
    y--;
}