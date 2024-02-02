// Pattern 47: ...

//     #
//    *#
//   #*#
//  *#*#
// #*#*#

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (j % 2 === 0) {
                row += '*';
            } else {
                row += '#';
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}