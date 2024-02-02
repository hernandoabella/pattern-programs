// Pattern 29: ...

//  * 1 * 2 *
//  3 * 4 * 5
//  * 6 * 7 *
//  8 * 9 *10
//  *11 *12 *

const n = 5;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if ((i + j) % 2 === 1) {
            row += `${x++} `;
        } else {
            row += '* ';
        }
    }

    console.log(row);
}
