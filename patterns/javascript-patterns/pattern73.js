// Pattern 73: ...

// *
// * *
// *   *
// *     *
// *       *
// *         *
// * * * * * * *

const n = 7;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j === 1 || i === j || i === n) {
            row += '* ';
        } else {
            row += '  ';
        }
    }

    console.log(row);
}
