// Pattern 115: ...

// **
// **
// ****
// ****
// ******
// ******

for (let i = 1; i <= 6; i++) {
    let k = (i % 2 !== 0) ? i + 1 : i;

    let line = '';
    for (let j = 0; j < k; j++) {
        line += '*';
    }

    console.log(line);
}
