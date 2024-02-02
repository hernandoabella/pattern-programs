
// * * *
// *   *
// * * *
// * *
// *   *

let n = 5;
let x = 1;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= Math.floor(n / 2) + 1; j++) {
        if (j === 1 || i === 1 || i === Math.floor(n / 2) + 1 || (i <= Math.floor(n / 2) && j === Math.floor(n / 2) + 1) || j === x) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    if (i > Math.floor(n / 2)) {
        x++;
    }
    console.log(row);
}
