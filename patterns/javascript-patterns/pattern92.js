// Pattern 92: ...

// * * * *
//   * * *
//     * *
//       *
//     * *
//   * * *
// * * * *

let n = 7;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n / 2 + 1; j++) {
        if (j >= x) {
            row += '* ';
        } else {
            row += '  ';
        }
    }

    if (i <= n / 2) {
        x++;
    } else {
        x--;
    }

    console.log(row);
}
