// Pattern 17: ...

// ****1
// ***21
// **321
// *4321
// 54321

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (j > i) {
            row += '*';
        } else {
            row += j;
        }
    }

    console.log(row);
}
