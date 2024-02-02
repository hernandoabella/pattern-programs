// Pattern 128: ...

//  ** **
// *  *  *
// *     *
//  *   *
//   * *
//    *

for (let row = 0; row < 6; row++) {
    let rowOutput = '';
    for (let col = 0; col < 7; col++) {
        if ((row === 0 && col % 3 !== 0) || (row === 1 && col % 3 === 0) || (row - col === 2) || (row + col === 8)) {
            rowOutput += '*';
        } else {
            rowOutput += ' ';
        }
    }
    console.log(rowOutput);
}
