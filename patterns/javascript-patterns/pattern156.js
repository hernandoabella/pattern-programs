// * * * * * *
// *         *
// *         *
// *         *
// *       * *
// * * * * * *
//             *

const n = 7;
const x = n - Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if ((i === 1 || i === x + 1) && j <= x + 1 || (j === 1 || j === x + 1) && i <= x + 1 || (j === i && i >= x)) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}

