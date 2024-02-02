// Pattern 104: ...

// *     *     *
//   *   *   *
//     * * *
// * * * * * * *
//     * * *
//   *   *   *
// *     *     *

let n = 7;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (j === i || j === n - i + 1 || i === Math.floor(n / 2) + 1 || j === Math.floor(n / 2) + 1) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
