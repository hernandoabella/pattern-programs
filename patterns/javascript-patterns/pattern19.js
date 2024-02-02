// Pattern 19: ...

// 54321
// *4321
// **321
// ***21
// ****1

const n = 5;

for (let i = n; i >= 1; i--) {
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
