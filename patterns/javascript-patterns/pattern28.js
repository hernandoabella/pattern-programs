// Pattern 28: ...

// 1 2 3 4 *
// 1 2 3 * 5
// 1 2 * 4 5
// 1 * 3 4 5
// * 2 3 4 5

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j === n - i + 1) {
            row += '* ';
        } else {
            row += j + ' ';
        }
    }

    console.log(row);
}
