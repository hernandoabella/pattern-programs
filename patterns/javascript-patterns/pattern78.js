// Pattern 78: ...

// *       *
//  *     *
//   *   *
//    * *
//     *

const n = 5;

let px = 1;
let py = n * 2 - 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n * 2; j++) {
        if (j === px || j === py) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    px++;
    py--;
    console.log(row);
}
