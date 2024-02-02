// Pattern 80: ...

//    *
//   *
//  *
// *
//  *
//   *
//    *

const n = 7;
let x = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= x; j++) {
        if (j === x) {
            row += '* ';
        } else {
            row += ' ';
        }
    }

    console.log(row);

    if (i <= n / 2) {
        x--;
    } else {
        x++;
    }
}
