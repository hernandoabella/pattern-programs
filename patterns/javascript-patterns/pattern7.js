// Pattern 7: Inverted-Triangle

// * * * * *
//  * * * *
//   * * *
//    * *
//     *

const p_height = 5;

for (let i = p_height; i >= 1; i--) {
    let spaces = '';
    for (let k = p_height - 1; k >= i; k--) {
        spaces += ' ';
    }

    let stars = '';
    for (let j = i; j >= 1; j--) {
        stars += '* ';
    }

    console.log(spaces + stars);
}
