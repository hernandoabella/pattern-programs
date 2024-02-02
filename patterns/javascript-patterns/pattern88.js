// Pattern 88: ...

// 1
// 2* 2
// 3* 3* 3
// 4* 4* 4* 4
// 3* 3* 3
// 2* 2
// 1

let n = 7;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j < 2 * x; j++) {
        if (i <= Math.floor(n / 2) + 1 && j % 2 === 1) {
            row += i;
        } else if (i > Math.floor(n / 2) + 1 && j % 2 === 1) {
            row += n - i + 1;
        } else {
            row += '* ';
        }
    }

    if (i <= Math.floor(n / 2)) {
        x++;
    } else {
        x--;
    }

    console.log(row);
}