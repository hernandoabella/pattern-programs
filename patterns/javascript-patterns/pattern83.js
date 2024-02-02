// Pattern 83: ...

//     *
//    - -
//   -   -
//  -     -
// -       -
// -       -
//  -     -
//   -   -
//    - -
//     *

const n = 10;

let px = Math.floor(n / 2);
let py = Math.floor(n / 2);

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n - 1; j++) {
        if ((i === 1 || i === n) && j === n / 2) {
            row += '*';
        } else if (j === px || j === py) {
            row += '-';
        } else {
            row += ' ';
        }
    }

    if (i === n / 2) {
        let t = px;
        px = py;
        py = t;
    } else {
        px--;
        py++;
    }

    console.log(row);
}