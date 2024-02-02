// Pattern 118: ...

// ******
// ******
//   ****
//   ****
//     **
//     **

let n = 6;

for (let i = n; i > 0; i--) {
    let k = (i % 2 !== 0) ? i + 1 : i;

    let line = '';
    for (let x = k; x < n; x++) {
        line += ' ';
    }
    for (let j = 0; j < k; j++) {
        line += '*';
    }

    console.log(line);
}
