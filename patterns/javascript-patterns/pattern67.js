// Pattern 67: ...

// *****5
// ****4
// ***3
// **2
// *1
// 0

const n = 5;

for (let i = n; i >= 0; i--) {
    let row = '';

    for (let j = 0; j <= i; j++) {
        if (i > j) {
            row += '*';
        } else {
            row += i;
        }
    }

    console.log(row);
}
