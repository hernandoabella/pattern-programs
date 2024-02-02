// Pattern 142: ...

// *****
// *
// *
// *
// *****

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1) {
            row += '*';
        }
    }
    console.log(row);
}
