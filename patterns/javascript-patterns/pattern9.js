// Pattern 9: ...

// *********
//  *******
//   *****
//    ***
//     *


const p_height = 5;
let max_stars = p_height * 2 - 1;
let p_space = p_height - 1;

for (let i = p_height; i >= 1; i--) {
    let spaces = '';
    for (let j = p_space; j >= i; j--) {
        spaces += ' ';
    }

    let stars = '';
    for (let k = 1; k <= max_stars; k++) {
        stars += '*';
    }
    max_stars -= 2;

    console.log(spaces + stars);
}
