// Pattern 66: ...

// 0
// *1
// **2
// ***3
// ****4
// *****5

const n = 5;

for (let i = 0; i <= n; i++) {
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
