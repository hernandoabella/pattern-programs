// Pattern 25: ...

// ****A
// ***BA
// **CBA
// *DCBA
// EDCBA

const n = 4;

for (let i = 0; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 0; j--) {
        if (j > i) {
            row += '*';
        } else {
            row += String.fromCharCode(j + 65);
        }
    }

    console.log(row);
}