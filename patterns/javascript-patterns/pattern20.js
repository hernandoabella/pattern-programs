// Pattern 20: ...

// A****
// BB***
// CCC**
// DDDD*
// EEEEE

const n = 5;

for (let i = 0; i < n; i++) {
    let row = '';

    for (let j = 0; j < n; j++) {
        if (j > i) {
            row += '*';
        } else {
            row += String.fromCharCode(i + 65);
        }
    }

    console.log(row);
}
