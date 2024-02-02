// * * *
// *   *
// * * *
// *
// *

const n = 5;
const x = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (i === 1 && j <= x || j === 1 || j === x && i <= x || i === x && j <= x) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
