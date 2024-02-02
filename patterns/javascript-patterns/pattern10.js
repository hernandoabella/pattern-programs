// Pattern 10: ...

// *
// **
// ***
// ****
// ***
// **
// *

const size = 3;

for (let i = size; i >= -size; i--) {
    let row = '';
    for (let j = size; j >= Math.abs(i); j--) {
        row += '*';
    }
    console.log(row);
}
