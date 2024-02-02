// Pattern 15: ...

// 12345
// 1234*
// 123**
// 12***
// 1****

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j > i) {
            row += '*';
        } else {
            row += j;
        }
    }

    console.log(row);
}
