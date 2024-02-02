// Pattern 76: ...

// * * * * *
//   *     *
//     *   *
//       * *
//         *

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j === n - i + 1 || j === n || i === n) {
            row += '* ';
        } else {
            row += '  ';
        }
    }

    console.log(row);
}
