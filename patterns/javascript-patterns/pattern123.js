// Pattern 123: ...

//   *
//   *
//  ***
//  ***
// *****
// *****

const n = 3;
let z = 1;

for (let i = 0; i < n; i++) {
    for (let j = 2; j > 0; j--) {
        let spaces = '';
        for (let x = n - 1; x > i; x--) {
            spaces += ' ';
        }
        let stars = '';
        for (let y = 0; y < z; y++) {
            stars += '*';
        }
        console.log(spaces + stars);
    }
    z += 2;
}
