// Pattern 103: ...

// *           *
// * *       * *
// *   *   *   *
// *     *     *
// *   *   *   *
// * *       * *
// *           *

let n = 7;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j === x || j === n - x + 1 || (j === 1 && i !== 1 && i !== n) || (j === n && i !== 1 && i !== n)) {
            row += '* ';
        } else {
            row += '  '; // Adjust spacing for better appearance
        }
    }

    if (i <= n / 2) {
        x++;
    } else {
        x--;
    }

    console.log(row);
}