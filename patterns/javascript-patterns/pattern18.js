// Pattern 18: ...

// 55555
// *4444
// **333
// ***22
// ****1

const n = 5;

for (let i = n; i >= 1; i--) {
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
