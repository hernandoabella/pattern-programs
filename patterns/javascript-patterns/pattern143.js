// Pattern 143: ...

// ****
// *   *
// *   *
// *   *
// ****

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (j === 1 || (i === 1 || i === n) && j <= n - 1) {
            row += '*';
        } else if (i !== 1 && i !== n && j === n) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}

