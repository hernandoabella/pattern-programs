// Pattern 101: ...

//    *
//   **
//  * *
// *  *
//  * *
//   **
//    *

let n = 7;
let x = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= Math.floor(n / 2) + 1; j++) {
        if (j === x || j === Math.floor(n / 2) + 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    if (i <= Math.floor(n / 2)) {
        x--;
    } else {
        x++;
    }

    console.log(row);
}
