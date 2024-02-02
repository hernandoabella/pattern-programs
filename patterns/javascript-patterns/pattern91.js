// Pattern 91: ...

// * * * * *
// * * * *
// * * *
// * *
// *
// * *
// * * *
// * * * *
// * * * * *

let size = 4;

for (let i = size; i >= -size; i--) {
    let row = '';
    
    for (let j = 0; j <= Math.abs(i); j++) {
        row += '* ';
    }

    console.log(row);
}
