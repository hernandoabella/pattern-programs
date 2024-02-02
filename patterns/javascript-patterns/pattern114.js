// Pattern 114: ...

//     *****
//    *****
//   *****
//  *****
// *****

let z = 1;
let n = 5;

for (let i = 0; i < n; i++) {
    let spaces = "";
    let stars = "";

    for (let j = n - 1; j > i; j--) {
        spaces += " ";
    }

    for (let k = 0; k < n; k++) {
        stars += "*";
    }

    console.log(spaces + stars);

    z++;
}
