// Pattern 98: ...

//          *
//         * *
//        * * *
//       * * * *
//     *         *
//    * *       * *
//   * * *     * * *
//  * * * *   * * * *
// * * * * * * * * * *

let p_height = 5;
let p_space = p_height - 1;
let x = 1;

for (let i = 1; i < p_height; i++) {
    let row = ' '.repeat(p_height);

    for (let k = p_space; k >= i; k--)
        row += ' ';

    for (let j = 1; j <= i; j++)
        row += '* ';

    console.log(row);
}

for (let i = 0; i < p_height; i++) {
    let row = ' '.repeat(p_space - i);

    for (let k = 0; k <= i; k++)
        row += '* ';

    for (let n = p_height + p_height - 2; n >= x; n--)
        row += ' ';

    for (let k = 0; k <= i; k++)
        row += '* ';

    x += 2;
    console.log(row);
}
