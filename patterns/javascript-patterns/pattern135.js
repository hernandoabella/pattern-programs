// Pattern 135: ...

// * * * * *
// *
// * * * * *
//         *
// * * * * *

let n = 5;
let mid = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || i === mid || (j === 1 && i <= mid) || (j === n && i > mid)) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
