// Pattern 84: ...

//    *
//   * *
//  * * *
// * * * *
//  * * *
//   * *
//    *

const size = 3;

for (let i = size; i >= -size; i--) {
    let row = '';

    for (let j = 1; j <= Math.abs(i); j++) {
        row += ' ';
    }

    for (let k = size; k >= Math.abs(i); k--) {
        row += '* ';
    }

    console.log(row);
}