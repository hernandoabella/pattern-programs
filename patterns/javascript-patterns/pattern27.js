// Pattern 27: ...

// EDCBA
// *DCBA
// **CBA
// ***BA
// ****A

const n = 4;

for (let i = n; i >= 0; i--) {
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