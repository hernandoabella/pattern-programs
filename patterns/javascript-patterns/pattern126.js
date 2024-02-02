// Pattern 126: ...

//     * * * * * *
//   * * * * * * * *
//  * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
//  * * * * * * * * *
//   * * * * * * * *
//     * * * * * *

for (let i = 1; i <= 9; i++) {
    let x, z;
    
    switch (i) {
        case 1:
        case 9:
            x = 6;
            z = 4;
            break;
        case 2:
        case 8:
            x = 8;
            z = 2;
            break;
        case 3:
        case 7:
            x = 9;
            z = 1;
            break;
        default:
            x = 10;
            z = 0;
    }
    
    let row = '';
    
    for (let j = 1; j <= z; j++) {
        row += ' ';
    }

    for (let k = 1; k <= x; k++) {
        row += '* ';
    }

    console.log(row);
}