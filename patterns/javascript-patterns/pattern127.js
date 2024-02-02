// Pattern 127: ...

//  ***   ***
// ***** *****
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

const n = 6;

// Top part of the heart
for (let i = n / 2; i <= n; i += 2) {
    let row = '';

    for (let j = 1; j < n - i; j += 2) {
        row += ' ';
    }

    for (let j = 1; j <= i; j++) {
        row += '*';
    }

    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }

    for (let j = 1; j <= i; j++) {
        row += '*';
    }

    console.log(row);
}

// Bottom part of the heart
for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = i; j < n; j++) {
        row += ' ';
    }

    for (let j = 1; j <= (i * 2) - 1; j++) {
        row += '*';
    }

    console.log(row);
}

