// Pattern 24: ...

// ****A
// ***BB
// **CCC
// *DDDD
// EEEEE

const n = 4;

for (let i = 0; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 0; j--) {
        if (j > i) {
            row += '*';
        } else {
            row += String.fromCharCode(i + 65);
        }
    }

    console.log(row);
}