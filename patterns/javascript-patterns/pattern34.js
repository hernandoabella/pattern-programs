// Pattern 34: ...

//  1
//  3*  2
//  4*  5*  6
// 10*  9*  8*  7
// 11* 12* 13* 14* 15

const n = 5;

let px = 1;
let py = 1;
let t;

for (let i = 1; i <= n; i++) {
    t = py;
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (i % 2 === 1) {
            row += `${px} `;
        } else {
            row += `${t} `;
        }
        t--;
        px++;

        if (j !== i) {
            row += '* ';
        }
    }

    py = py + i + 1;
    console.log(row);
}