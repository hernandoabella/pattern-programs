// Pattern 30: ...

// * A* B*
// C* D* E
// * F* G*
// H* I* J
// * K* L*

const n = 5;
let x = 'A';

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if ((i + j) % 2 === 1) {
            row += `${x}`;
            x = String.fromCharCode(x.charCodeAt(0) + 1);
        } else {
            row += '* ';
        }
    }

    console.log(row);
}