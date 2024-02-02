// Pattern 129: X-Max Tree

//         *
//        * *
//       * * *
//      * * * *
//       * * *
//      * * * *
//     * * * * *
//    * * * * * *
//      * * * *
//      * * * *
//      * * * *
//      * * * *

function drawPattern() {
    let height = 3;
    let width = 4;

    let space = width * 5;
    let r = 1;
    let m = 1;

    for (r = 1; r < height; r++) {
        for (let i = m; i <= width; i++) {
            let rowOutput = '';
            for (let j = space; j >= i; j--) {
                rowOutput += ' ';
            }
            for (let k = 1; k <= i; k++) {
                rowOutput += '* ';
            }
            console.log(rowOutput);
        }
        m += 2;
        width += 2;
    }

    for (let i = 1; i <= 4; i++) {
        let rowOutput = '';
        for (let j = space - 3; j >= 1; j--) {
            rowOutput += ' ';
        }
        for (let k = 1; k <= 4; k++) {
            rowOutput += '* ';
        }
        console.log(rowOutput);
    }
}

drawPattern();
