// Pattern 99: ...

//     *
//    * *
//   *   *
//  *     *
// *********

let n = 5;
let px = n;
let py = n;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j < n * 2; j++) {
        if (j === px || j === py || i === n) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    px--;
    py++;
    console.log(row);
}
