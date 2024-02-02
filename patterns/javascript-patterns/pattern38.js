// Pattern 38: ...

// 1
// 1*
// 1*3
// 1*3*
// 1*3*5

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (j % 2 === 0) {
            row += '*';
        } else {
            row += j;
        }
    }

    console.log(row);
}