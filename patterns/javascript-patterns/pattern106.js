// Pattern 106: ...

// *   *   *   *
// *   *   *   *
// * * * * * * *
// *           *
// *           *
// *           *
// * * * * * * *

let n = 7;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (
            (i === Math.floor(n / 2) || i === n) ||
            ((j === 1 || j === n) && i >= Math.floor(n / 2)) ||
            (j % 2 === 1 && i <= Math.floor(n / 2))
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
