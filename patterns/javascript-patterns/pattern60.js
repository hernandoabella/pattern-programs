// Pattern 60: ...

//     1
//    * *
//   3 3 3
//  * * * *
// 5 5 5 5 5

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (i % 2 === 0) {
                row += '* ';
            } else {
                row += i + ' ';
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
