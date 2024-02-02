// Pattern 95: ...

//     *        *
//    ***      ***
//   *****    *****
//  *******  *******
// ******************

let minStars = 1;
let pHeight = 5;
let pSpace = pHeight - 1;
let n;
let x = 1;

for (let i = 0; i < pHeight; i++) {
    let row = '';

    for (let j = pSpace; j > i; j--) {
        row += ' ';
    }

    for (let k = 0; k < minStars; k++) {
        row += '*';
    }

    for (n = pHeight + pHeight - 2; n >= x; n--) {
        row += ' ';
    }

    for (let k = 0; k < minStars; k++) {
        row += '*';
    }

    minStars += 2;
    x += 2;
    console.log(row);
}