// Pattern 96: ...

// 1 2 3 4 * 4 3 2 1
// 1 2 3 * * * 3 2 1
// 1 2 * * * * * 2 1
// 1 * * * * * * * 1
// * * * * * * * * *

let n = 5;
let x = n;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j < 2 * n; j++) {
        if (j >= x && j <= n + i - 1) {
            row += '* ';
        } else if (j <= n) {
            row += j + ' ';
        } else {
            row += (2 * n - j) + ' ';
        }
    }

    x--;
    console.log(row);
}
