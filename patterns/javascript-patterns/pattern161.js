// *       *
//  *     * 
//   *   *  
//    * *   
//     *    

for (let i = 1, x = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j < 2 * 5; j++) {
        if (j === x || j === 2 * 5 - x) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
    x++;
}