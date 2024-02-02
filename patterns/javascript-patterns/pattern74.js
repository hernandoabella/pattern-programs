// Pattern 74: ...

// * * * * * * *
// *         *
// *       *
// *     *
// *   *
// * *
// *

const n = 7;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (j === n - i + 1 || j === n || i === n) {
            row += '* ';
        } else {
            row += '  ';
        }
    }

    console.log(row);
}
