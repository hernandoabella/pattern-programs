// Pattern 120: ...

//   *
//   *
//  **
//  **
// ***
// ***

for (let i = 1; i <= 3; i++) {
    for (let x = 2; x > 0; x--) {
        let spaces = '';
        for (let y = 2; y >= i; y--) {
            spaces += ' ';
        }
        let stars = '';
        for (let j = 0; j < i; j++) {
            stars += '*';
        }
        console.log(spaces + stars);
    }
}
