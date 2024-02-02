// Pattern 39: ...

// 1
// 2*
// 3*3
// 4*4*
// 5*5*5

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (j % 2 === 0) {
            row += '*';
        } else {
            row += i;
        }
    }

    console.log(row);
}
