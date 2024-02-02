// Pattern 13: ...

// 1****
// 12***
// 123**
// 1234*
// 12345

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    
    for (let j = 1; j <= n; j++) {
        if (j > i) {
            row += '*';
        } else {
            row += j;
        }
    }
    
    console.log(row);
}
