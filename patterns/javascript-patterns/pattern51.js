// Pattern 51: ...

//     1
//    *1
//   3*1
//  *3*1
// 5*3*1

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (j % 2 === 0) {
                row += '*';
            } else {
                row += j;
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
