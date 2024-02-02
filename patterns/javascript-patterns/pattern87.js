// Pattern 87: ...

// *
// * *
// ABC
// * *
// *

let n = 5;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= x; j++) {
        if (i !== Math.floor(n / 2) + 1) {
            row += '* ';
        } else {
            row += String.fromCharCode(64 + j);
        }
    }

    if (i <= Math.floor(n / 2)) {
        x++;
    } else {
        x--;
    }

    console.log(row);
}
