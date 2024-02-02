// Pattern 146: ...

// *****
// *
// * ***
// *   *
// *****

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (j === 1 || i === 1 || i === n || (i > n / 2 && j === n) || (i === Math.floor(n / 2) + 1 && j > n / 2)) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}
