// Pattern 85: ...

// *
// **
// ***
// *
// **
// ***
// *
// **
// ***

const n = 3;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        let row = '';
        for (let k = 1; k <= j; k++) {
            row += '*';
        }
        console.log(row);
    }
}
