// Pattern 16: ...

// ****1
// ***22
// **333
// *4444
// 55555

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (j > i) {
            row += '*';
        } else {
            row += i;
        }
    }

    console.log(row);
}
