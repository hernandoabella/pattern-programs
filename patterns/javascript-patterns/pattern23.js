// Pattern 23: ...

// ABCDE
// ABCD*
// ABC**
// AB***
// A****

const n = 4;

for (let i = n; i >= 0; i--) {
    let row = '';

    for (let j = 0; j <= n; j++) {
        if (j > i) {
            row += '*';
        } else {
            row += String.fromCharCode(j + 65);
        }
    }

    console.log(row);
}
