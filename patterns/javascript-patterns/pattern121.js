// Pattern 121: ...

// ***
// ***
// **
// **
// *
// *

for (let i = 3; i >= 1; i--) {
    for (let x = 2; x > 0; x--) {
        let stars = '';
        for (let j = 0; j < i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}
