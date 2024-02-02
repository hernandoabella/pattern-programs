// Pattern 21: ...

// A****
// AB***
// ABC**
// ABCD*
// ABCDE

const n = 5;

for (let i = 0; i < n; i++) {
    let row = '';

    for (let j = 0; j < n; j++) {
        if (j > i) {
            row += '*';
        } else {
            row += String.fromCharCode(j + 65);
        }
    }

    console.log(row);
}
