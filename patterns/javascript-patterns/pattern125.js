// Pattern 125: ...

// *****
//   ***
//     *
//   ***
// *****

const n = 3;
let s1 = n * 2 - 1, s2 = 3;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j < i; j++) {
        row += '  ';
    }
    for (let k = 1; k <= s1; k++) {
        row += '*';
    }
    s1 -= 2;
    console.log(row);
}

for (let i = 1; i <= n - 1; i++) {
    let row = '';
    for (let j = n - 2; j >= i; j--) {
        row += '  ';
    }
    for (let k = 1; k <= s2; k++) {
        row += '*';
    }
    s2 += 2;
    console.log(row);
}
