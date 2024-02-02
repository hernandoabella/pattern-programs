// Pattern 81: ...

//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

const n = 9;
let px = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j === px || j === n - px + 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    if (i <= n / 2) {
        px--;
    } else {
        px++;
    }

    console.log(row);
}