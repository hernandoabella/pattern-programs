// Pattern 31: ...

// * # # # # # #
// # # # # # * *
// * * * # # # #
// # # # * * * *
// * * * # # # #
// # # # # # * *
// * # # # # # #

const n = 7;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (i % 2 === 1 && j <= x) {
            row += '* ';
        } else if (i % 2 === 0 && j >= n - x + 1) {
            row += '* ';
        } else {
            row += '# ';
        }
    }

    console.log(row);

    if (i <= n / 2) {
        x++;
    } else {
        x--;
    }
}
