// Pattern 56: ...

// 54321
//  ****
//   321
//    **
//     1

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (i % 2 === 0) {
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
