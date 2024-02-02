// Pattern 8: ...

//     *
//    ***
//   *****
//  *******
// *********

const p_height = 5;
let min_stars = 1;
let p_space = p_height - 1;

for (let i = 0; i < p_height; i++) {
    let spaces = '';
    for (let j = p_space; j > i; j--) {
        spaces += ' ';
    }

    let stars = '';
    for (let k = 0; k < min_stars; k++) {
        stars += '*';
    }
    min_stars += 2;

    console.log(spaces + stars);
}
