// Pattern 42: ...

// 55555
// ****
// 333
// **
// 1

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (i % 2 === 0) {
            row += '*';
        } else {
            row += i;
        }
    }

    console.log(row);
}
