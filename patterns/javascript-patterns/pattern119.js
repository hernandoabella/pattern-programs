// Pattern 119: ...

// *
// *
// **
// **
// ***
// ***

let n = 3;

for (let i = 1; i <= n; i++) {
    for (let c = n - 1; c > 0; c--) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
}
