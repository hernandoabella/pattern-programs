// Pattern 93: ...

// *       *
// **     **
// ***   ***
// **** ****
// *********

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j < n * 2; j++) {
        if (j <= i || j >= n * 2 - i) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
