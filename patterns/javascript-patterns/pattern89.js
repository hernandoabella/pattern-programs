// Pattern 89: ...

// * * * * * * *
//   * * * * *
//     * * *
//       *
//     * * *
//   * * * * *
// * * * * * * *

let n = 7;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j >= x && j <= n - x + 1) {
            row += '* ';
        } else {
            row += '  ';
        }
    }

    if (i <= Math.floor(n / 2)) {
        x++;
    } else {
        x--;
    }

    console.log(row);
}