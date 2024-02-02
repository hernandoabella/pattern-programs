// Pattern 32: ...

// * 0 0 0 * 0 0 0 *
// 0 * 0 0 * 0 0 * 0
// 0 0 * 0 * 0 * 0 0
// 0 0 0 * * * 0 0 0
// 0 0 0 0 * 0 0 0 0

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j < 2 * n; j++) {
        if (j === i || j === 2 * n - i || j === n) {
            row += '* ';
        } else {
            row += '0 ';
        }
    }

    console.log(row);
}