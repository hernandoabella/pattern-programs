// Pattern 137: ...

// * * * *
//       *
//     *
//   *
// *

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - 1; j++) {
        if (i === 1 || i + j === n + 1) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
