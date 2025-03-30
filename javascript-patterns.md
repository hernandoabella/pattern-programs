150+ JavaScript Pattern Programs

Pattern 1
// *****
// *****
// *****
// *****
// *****

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= 5; j++) {
        row += '*';
    }
    console.log(row);
}
 
Pattern 2
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
 
Pattern 3
// *****
// ****
// ***
// **
// *

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 5; j >= i; j--) {
        row += '*';
    }
    console.log(row);
}
 
Pattern 4
//     *
//    **
//   ***
//  ****
// *****

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    
    for (let j = n - 1; j >= i; j--) {
        row += ' ';
    }
    
    for (let k = 1; k <= i; k++) {
        row += '*';
    }

    console.log(row);
}

 
Pattern 5
// *****
//  ****
//   ***
//    **
//     *

const n = 5;

for (let i = n; i >= 1; i--) {
    let spaces = '';
    for (let j = n - 1; j >= i; j--) {
        spaces += ' ';
    }

    let stars = '';
    for (let k = 1; k <= i; k++) {
        stars += '*';
    }

    console.log(spaces + stars);
}

 
Pattern 6

//     *
//    * *
//   * * *
//  * * * *

const p_height = 5;

for (let i = 1; i < p_height; i++) {
    let spaces = '';
    for (let k = p_height - 1; k >= i; k--) {
        spaces += ' ';
    }

    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '* ';
    }

    console.log(spaces + stars);
}
 
Pattern 7
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

const p_height = 5;

for (let i = p_height; i >= 1; i--) {
    let spaces = '';
    for (let k = p_height - 1; k >= i; k--) {
        spaces += ' ';
    }

    let stars = '';
    for (let j = i; j >= 1; j--) {
        stars += '* ';
    }

    console.log(spaces + stars);
}

 
Pattern 8

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
 
Pattern 9

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
 
Pattern 10

// *
// **
// ***
// ****
// ***
// **
// *

const size = 3;

for (let i = size; i >= -size; i--) {
    let row = '';
    for (let j = size; j >= Math.abs(i); j--) {
        row += '*';
    }
    console.log(row);
}
 
Pattern 11
//    *
//   **
//  ***
// ****
//  ***
//   **
//    *

const size = 3;

for (let i = size; i >= -size; i--) {
    let row = '';
    
    for (let j = 1; j <= Math.abs(i); j++) {
        row += ' ';
    }

    for (let k = size; k >= Math.abs(i); k--) {
        row += '*';
    }

    console.log(row);
}


 
Pattern 12

// 1****
// 22***
// 333**
// 4444*
// 55555

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    
    for (let j = 1; j <= n; j++) {
        if (j > i) {
            row += '*';
        } else {
            row += i;
        }
    }
    
    console.log(row);
}
 
Pattern 13

// 1****
// 12***
// 123**
// 1234*
// 12345

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    
    for (let j = 1; j <= n; j++) {
        if (j > i) {
            row += '*';
        } else {
            row += j;
        }
    }
    
    console.log(row);
}
 
Pattern 14

// 55555
// 4444*
// 333**
// 22***
// 1****

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    
    for (let j = 1; j <= n; j++) {
        if (j > i) {
            row += '*';
        } else {
            row += j;
        }
    }
    
    console.log(row);
}
 
Pattern 15

// 12345
// 1234*
// 123**
// 12***
// 1****

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j > i) {
            row += '*';
        } else {
            row += j;
        }
    }

    console.log(row);
}
 
Pattern 16

// ****1
// ***22
// **333
// *4444
// 55555

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (j > i) {
            row += '*';
        } else {
            row += i;
        }
    }

    console.log(row);
}
 
Pattern 17

// ****1
// ***21
// **321
// *4321
// 54321

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (j > i) {
            row += '*';
        } else {
            row += j;
        }
    }

    console.log(row);
}
 
Pattern 18

// 55555
// *4444
// **333
// ***22
// ****1

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (j > i) {
            row += '*';
        } else {
            row += i;
        }
    }

    console.log(row);
}
 
Pattern 19

// 54321
// *4321
// **321
// ***21
// ****1

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (j > i) {
            row += '*';
        } else {
            row += j;
        }
    }

    console.log(row);
}
 
Pattern 20

// A****
// BB***
// CCC**
// DDDD*
// EEEEE

const n = 5;

for (let i = 0; i < n; i++) {
    let row = '';

    for (let j = 0; j < n; j++) {
        if (j > i) {
            row += '*';
        } else {
            row += String.fromCharCode(i + 65);
        }
    }

    console.log(row);
}

 
Pattern 21

// A****
// AB***
// ABC**
// ABCD*
// ABCDE

const n = 5;

for (let i = 0; i < n; i++) {
    let row = '';

    for (let j = 0; j < n; j++) {
        if (j > i) {
            row += '*';
        } else {
            row += String.fromCharCode(j + 65);
        }
    }

    console.log(row);
}
 
Pattern 22

// EEEEE
// DDDD*
// CCC**
// BB***
// A****

const n = 4;

for (let i = n; i >= 0; i--) {
    let row = '';

    for (let j = 0; j <= n; j++) {
        if (j > i) {
            row += '*';
        } else {
            row += String.fromCharCode(i + 65);
        }
    }

    console.log(row);
}
 
Pattern 23

// ABCDE
// ABCD*
// ABC**
// AB***
// A****

const n = 4;

for (let i = n; i >= 0; i--) {
    let row = '';

    for (let j = 0; j <= n; j++) {
        if (j > i) {
            row += '*';
        } else {
            row += String.fromCharCode(j + 65);
        }
    }

    console.log(row);
}
 
Pattern 24

// ****A
// ***BB
// **CCC
// *DDDD
// EEEEE

const n = 4;

for (let i = 0; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 0; j--) {
        if (j > i) {
            row += '*';
        } else {
            row += String.fromCharCode(i + 65);
        }
    }

    console.log(row);
}
 
Pattern 25

// ****A
// ***BA
// **CBA
// *DCBA
// EDCBA

const n = 4;

for (let i = 0; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 0; j--) {
        if (j > i) {
            row += '*';
        } else {
            row += String.fromCharCode(j + 65);
        }
    }

    console.log(row);
}
 
Pattern 26

// EEEEE
// *DDDD
// **CCC
// ***BB
// ****A

const n = 4;

for (let i = n; i >= 0; i--) {
    let row = '';

    for (let j = n; j >= 0; j--) {
        if (j > i) {
            row += '*';
        } else {
            row += String.fromCharCode(i + 65);
        }
    }

    console.log(row);
}
 
Pattern 27

// EDCBA
// *DCBA
// **CBA
// ***BA
// ****A

const n = 4;

for (let i = n; i >= 0; i--) {
    let row = '';

    for (let j = n; j >= 0; j--) {
        if (j > i) {
            row += '*';
        } else {
            row += String.fromCharCode(j + 65);
        }
    }

    console.log(row);
}
 
Pattern 28
// 1 2 3 4 *
// 1 2 3 * 5
// 1 2 * 4 5
// 1 * 3 4 5
// * 2 3 4 5

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j === n - i + 1) {
            row += '* ';
        } else {
            row += j + ' ';
        }
    }

    console.log(row);
}
 
Pattern 29

//  * 1 * 2 *
//  3 * 4 * 5
//  * 6 * 7 *
//  8 * 9 *10
//  *11 *12 *

const n = 5;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if ((i + j) % 2 === 1) {
            row += `${x++} `;
        } else {
            row += '* ';
        }
    }

    console.log(row);
}
 
Pattern 30

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
 
Pattern 31

// * # # # # # #
// # # # # # * *
// * * * # # # #
// # # # * * * *
// * * * # # # #
// # # # # # * *
// * # # # # # #

const n = 7;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (i % 2 === 1 && j <= x) {
            row += '* ';
        } else if (i % 2 === 0 && j >= n - x + 1) {
            row += '* ';
        } else {
            row += '# ';
        }
    }

    console.log(row);

    if (i <= n / 2) {
        x++;
    } else {
        x--;
    }
}
 
Pattern 32

// * 0 0 0 * 0 0 0 *
// 0 * 0 0 * 0 0 * 0
// 0 0 * 0 * 0 * 0 0
// 0 0 0 * * * 0 0 0
// 0 0 0 0 * 0 0 0 0

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j < 2 * n; j++) {
        if (j === i || j === 2 * n - i || j === n) {
            row += '* ';
        } else {
            row += '0 ';
        }
    }

    console.log(row);
}
 
Pattern 33

// 1
// 1* 2
// 1* 2* 3
// 1* 2* 3* 4
// 1* 2* 3* 4* 5

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        row += j;
        if (j !== i) {
            row += '* ';
        }
    }

    console.log(row);
}

 
Pattern 34
//  1
//  3*  2
//  4*  5*  6
// 10*  9*  8*  7
// 11* 12* 13* 14* 15

const n = 5;

let px = 1;
let py = 1;
let t;

for (let i = 1; i <= n; i++) {
    t = py;
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (i % 2 === 1) {
            row += `${px} `;
        } else {
            row += `${t} `;
        }
        t--;
        px++;

        if (j !== i) {
            row += '* ';
        }
    }

    py = py + i + 1;
    console.log(row);
}
 
Pattern 35

// #
// **
// ###
// ****
// #####

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (i % 2 === 0) {
            row += '*';
        } else {
            row += '#';
        }
    }

    console.log(row);
}
 
Pattern 36

// 1
// **
// 333
// ****
// 55555

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (i % 2 === 0) {
            row += '*';
        } else {
            row += i;
        }
    }

    console.log(row);
}
 
Pattern 37

// 1
// **
// 123
// ****
// 12345

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (i % 2 === 0) {
            row += '*';
        } else {
            row += j;
        }
    }

    console.log(row);
}
 
Pattern 38

// 1
// 1*
// 1*3
// 1*3*
// 1*3*5

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (j % 2 === 0) {
            row += '*';
        } else {
            row += j;
        }
    }

    console.log(row);
}
 
Pattern 39

// 1
// 2*
// 3*3
// 4*4*
// 5*5*5

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (j % 2 === 0) {
            row += '*';
        } else {
            row += i;
        }
    }

    console.log(row);
}

 
Pattern 40

// #####
// ****
// ###
// **
// #

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (i % 2 === 0) {
            row += '*';
        } else {
            row += '#';
        }
    }

    console.log(row);
}
 
Pattern 41

// #*#*#
// #*#*
// #*#
// #*
// #

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (j % 2 === 0) {
            row += '*';
        } else {
            row += '#';
        }
    }

    console.log(row);
}
 
Pattern 42

// 55555
// ****
// 333
// **
// 1

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (i % 2 === 0) {
            row += '*';
        } else {
            row += i;
        }
    }

    console.log(row);
}
 
Pattern 43

// 12345
// ****
// 123
// **
// 1

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (i % 2 === 0) {
            row += '*';
        } else {
            row += j;
        }
    }

    console.log(row);
}

 
Pattern 44

// 1*3*5
// 1*3*
// 1*3
// 1*
// 1

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (j % 2 === 0) {
            row += '*';
        } else {
            row += j;
        }
    }

    console.log(row);
}

 
Pattern 45

// 5*5*5
// 4*4*
// 3*3
// 2*
// 1

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        if (j % 2 === 0) {
            row += '*';
        } else {
            row += i;
        }
    }

    console.log(row);
}
 
Pattern 46

//     #
//    **
//   ###
//  ****
// #####

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (i <= j) {
            if (i % 2 === 0) {
                row += '*';
            } else {
                row += '#';
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}

 
Pattern 47

//     #
//    *#
//   #*#
//  *#*#
// #*#*#

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (j % 2 === 0) {
                row += '*';
            } else {
                row += '#';
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 48

//     1
//    **
//   333
//  ****
// 55555

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (i % 2 === 0) {
                row += '*';
            } else {
                row += i;
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 49

//     1
//    **
//   321
//  ****
// 54321

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (i % 2 === 0) {
                row += '*';
            } else {
                row += j;
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 50

//     5
//    **
//   345
//  ****
// 12345

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (i <= j) {
            if (i % 2 === 0) {
                row += '*';
            } else {
                row += j;
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}

 
Pattern 51

//     1
//    *1
//   3*1
//  *3*1
// 5*3*1

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (j % 2 === 0) {
                row += '*';
            } else {
                row += j;
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}


 
Pattern 52

//     1
//    *2
//   3*3
//  *4*4
// 5*5*5

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (j % 2 === 0) {
                row += '*';
            } else {
                row += i;
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 53

// #####
//  ****
//   ###
//    **
//     #

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (i % 2 === 0) {
                row += '*';
            } else {
                row += '#';
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}

 
Pattern 54

// #*#*#
//  *#*#
//   #*#
//    *#
//     #

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (j % 2 === 0) {
                row += '*';
            } else {
                row += '#';
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 55

// 55555
//  ****
//   333
//    **
//     1

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (i % 2 === 0) {
                row += '*';
            } else {
                row += i;
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}

 
Pattern 56

// 54321
//  ****
//   321
//    **
//     1

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (i % 2 === 0) {
                row += '*';
            } else {
                row += j;
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 57

// 5*3*1
//  *3*1
//   3*1
//    *1
//     1

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (j % 2 === 0) {
                row += '*';
            } else {
                row += j;
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 58

//     #
//    * *
//   # # #
//  * * * *
// # # # # #

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (i <= j) {
            if (i % 2 === 0) {
                row += '* ';
            } else {
                row += '# ';
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 59

//     #
//    * #
//   # * #
//  * # * #

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i > j) {
            if (j % 2 === 0) {
                row += '* ';
            } else {
                row += '# ';
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 60

//     1
//    * *
//   3 3 3
//  * * * *
// 5 5 5 5 5

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (i % 2 === 0) {
                row += '* ';
            } else {
                row += i + ' ';
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 61

// # # # # #
//  * * * *
//   # # #
//    * *
//     #

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (i % 2 === 0) {
                row += '* ';
            } else {
                row += '# ';
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 62

// # * # * #
//  * # * #
//   # * #
//    * #
//     #

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (j % 2 === 0) {
                row += '* ';
            } else {
                row += '# ';
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 63

// 5 5 5 5 5
//  * * * *
//   3 3 3
//    * *
//     1

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (i % 2 === 0) {
                row += '* ';
            } else {
                row += i + ' ';
            }
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 64

// 0
// 1*
// 2**
// 3***
// 4****
// 5*****

const n = 5;

for (let i = 0; i <= n; i++) {
    let row = '';

    for (let j = 0; j <= i; j++) {
        if (j !== 0) {
            row += '*';
        } else {
            row += i;
        }
    }

    console.log(row);
}
 
Pattern 65

// 5*****
// 4****
// 3***
// 2**
// 1*
// 0

const n = 5;

for (let i = n; i >= 0; i--) {
    let row = '';

    for (let j = 0; j <= i; j++) {
        if (j !== 0) {
            row += '*';
        } else {
            row += i;
        }
    }

    console.log(row);
}
 
Pattern 66

// 0
// *1
// **2
// ***3
// ****4
// *****5

const n = 5;

for (let i = 0; i <= n; i++) {
    let row = '';

    for (let j = 0; j <= i; j++) {
        if (i > j) {
            row += '*';
        } else {
            row += i;
        }
    }

    console.log(row);
}

 
Pattern 67

// *****5
// ****4
// ***3
// **2
// *1
// 0

const n = 5;

for (let i = n; i >= 0; i--) {
    let row = '';

    for (let j = 0; j <= i; j++) {
        if (i > j) {
            row += '*';
        } else {
            row += i;
        }
    }

    console.log(row);
}
 
Pattern 68

// *   *
//  * *
//   *
//  * *
// *   *

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (i === j || i + j === n + 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 69

//   *
//   *
// *****
//   *
//   *

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j === 3 || i === 3) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);
}


 
Pattern 70

// *****
// *   *
// *   *
// *   *
// *****

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if ((j === 1 || j === n) || (i === 1 || i === n)) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 71

// *****
// *###*
// *###*
// *###*
// *****

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if ((j === 1 || j === n) || (i === 1 || i === n)) {
            row += '*';
        } else {
            row += '#';
        }
    }

    console.log(row);
}
 
Pattern 72

// *******
// **   **
// * * * *
// *  *  *
// * * * *
// **   **
// *******

const n = 7;

for (let i = 0; i < n; i++) {
    let row = '';

    for (let j = 0; j < n; j++) {
        if (i === 0 || j === 0 || i === j || i === n - 1 || j === n - 1 || i + j === n - 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 73

// *
// * *
// *   *
// *     *
// *       *
// *         *
// * * * * * * *

const n = 7;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j === 1 || i === j || i === n) {
            row += '* ';
        } else {
            row += '  ';
        }
    }

    console.log(row);
}

 
Pattern 74

// * * * * * * *
// *         *
// *       *
// *     *
// *   *
// * *
// *

const n = 7;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = n; j >= 1; j--) {
        if (j === n - i + 1 || j === n || i === n) {
            row += '* ';
        } else {
            row += '  ';
        }
    }

    console.log(row);
}


 
Pattern 75

//         *
//       * *
//     *   *
//   *     *
// * * * * *

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j === n - i + 1 || j === n || i === n) {
            row += '* ';
        } else {
            row += '  ';
        }
    }

    console.log(row);
}
 
Pattern 76

// * * * * *
//   *     *
//     *   *
//       * *
//         *

const n = 5;

for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j === n - i + 1 || j === n || i === n) {
            row += '* ';
        } else {
            row += '  ';
        }
    }

    console.log(row);
}

 
Pattern 77

//     *
//    * *
//   *   *
//  *     *
// *       *

const n = 5;

let px = n;
let py = n;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n * 2; j++) {
        if (j === px || j === py) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    px--;
    py++;
    console.log(row);
}
 
Pattern 78

// *       *
//  *     *
//   *   *
//    * *
//     *

const n = 5;

let px = 1;
let py = n * 2 - 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n * 2; j++) {
        if (j === px || j === py) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    px++;
    py--;
    console.log(row);
}
 
Pattern 79

// *
//  *
//   *
//    *
//   *
//  *
// *

const n = 7;

let x = 1;
for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= x; j++) {
        if (j === x) {
            row += '* ';
        } else {
            row += ' ';
        }
    }

    console.log(row);
    
    if (i <= n / 2) {
        x++;
    } else {
        x--;
    }
}
 
Pattern 80

//    *
//   *
//  *
// *
//  *
//   *
//    *

const n = 7;
let x = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= x; j++) {
        if (j === x) {
            row += '* ';
        } else {
            row += ' ';
        }
    }

    console.log(row);

    if (i <= n / 2) {
        x--;
    } else {
        x++;
    }
}

 
Pattern 81

//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

const n = 9;
let px = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j === px || j === n - px + 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    if (i <= n / 2) {
        px--;
    } else {
        px++;
    }

    console.log(row);
}
 
Pattern 82

//     *
//    / \    
//   /   \   
//  /     \  
// /       \ 
// \       /
//  \     /
//   \   /
//    \ /
//     *

const n = 10;

let px = Math.floor(n / 2);
let py = Math.floor(n / 2);

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if ((i === 1 || i === n) && j === n / 2) {
            row += '*';
        } else if (j === px) {
            row += '/';
        } else if (j === py) {
            row += '\\';
        } else {
            row += ' ';
        }
    }

    if (i === n / 2) {
        let t = px;
        px = py;
        py = t;
    } else {
        px--;
        py++;
    }

    console.log(row);
}
 
Pattern 83

//     *
//    - -
//   -   -
//  -     -
// -       -
// -       -
//  -     -
//   -   -
//    - -
//     *

const n = 10;

let px = Math.floor(n / 2);
let py = Math.floor(n / 2);

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n - 1; j++) {
        if ((i === 1 || i === n) && j === n / 2) {
            row += '*';
        } else if (j === px || j === py) {
            row += '-';
        } else {
            row += ' ';
        }
    }

    if (i === n / 2) {
        let t = px;
        px = py;
        py = t;
    } else {
        px--;
        py++;
    }

    console.log(row);
}

 
Pattern 84

//    *
//   * *
//  * * *
// * * * *
//  * * *
//   * *
//    *

const size = 3;

for (let i = size; i >= -size; i--) {
    let row = '';

    for (let j = 1; j <= Math.abs(i); j++) {
        row += ' ';
    }

    for (let k = size; k >= Math.abs(i); k--) {
        row += '* ';
    }

    console.log(row);
}

 
Pattern 85

// *
// **
// ***
// *
// **
// ***
// *
// **
// ***

const n = 3;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        let row = '';
        for (let k = 1; k <= j; k++) {
            row += '*';
        }
        console.log(row);
    }
}

 
Pattern 86

// *
// * *
// 123
// * *
// *

let n = 5;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= x; j++) {
        if (i !== Math.floor(n / 2) + 1) {
            row += '* ';
        } else {
            row += j;
        }
    }

    if (i <= Math.floor(n / 2)) {
        x++;
    } else {
        x--;
    }

    console.log(row);
}
 
Pattern 87

// *
// * *
// ABC
// * *
// *

let n = 5;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= x; j++) {
        if (i !== Math.floor(n / 2) + 1) {
            row += '* ';
        } else {
            row += String.fromCharCode(64 + j);
        }
    }

    if (i <= Math.floor(n / 2)) {
        x++;
    } else {
        x--;
    }

    console.log(row);
}
 
Pattern 88

// 1
// 2* 2
// 3* 3* 3
// 4* 4* 4* 4
// 3* 3* 3
// 2* 2
// 1

let n = 7;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j < 2 * x; j++) {
        if (i <= Math.floor(n / 2) + 1 && j % 2 === 1) {
            row += i;
        } else if (i > Math.floor(n / 2) + 1 && j % 2 === 1) {
            row += n - i + 1;
        } else {
            row += '* ';
        }
    }

    if (i <= Math.floor(n / 2)) {
        x++;
    } else {
        x--;
    }

    console.log(row);
}

 
Pattern 89

// * * * * * * *
//   * * * * *
//     * * *
//       *
//     * * *
//   * * * * *
// * * * * * * *

let n = 7;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j >= x && j <= n - x + 1) {
            row += '* ';
        } else {
            row += '  ';
        }
    }

    if (i <= Math.floor(n / 2)) {
        x++;
    } else {
        x--;
    }

    console.log(row);
}
 
Pattern 90

// *           *
// * *       * *
// * * *   * * *
// * * * * * * *
// * * *   * * *
// * *       * *
// *           *

let n = 7;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j <= x || j >= n - x + 1) {
            row += '* ';
        } else {
            row += '  ';
        }
    }

    if (i <= Math.floor(n / 2)) {
        x++;
    } else {
        x--;
    }

    console.log(row);
}
 
Pattern 91

// * * * * *
// * * * *
// * * *
// * *
// *
// * *
// * * *
// * * * *
// * * * * *

let size = 4;

for (let i = size; i >= -size; i--) {
    let row = '';
    
    for (let j = 0; j <= Math.abs(i); j++) {
        row += '* ';
    }

    console.log(row);
}

 
Pattern 92

// * * * *
//   * * *
//     * *
//       *
//     * *
//   * * *
// * * * *

let n = 7;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n / 2 + 1; j++) {
        if (j >= x) {
            row += '* ';
        } else {
            row += '  ';
        }
    }

    if (i <= n / 2) {
        x++;
    } else {
        x--;
    }

    console.log(row);
}
 
Pattern 93

// *       *
// **     **
// ***   ***
// **** ****
// *********

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j < n * 2; j++) {
        if (j <= i || j >= n * 2 - i) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
 
Pattern 94

// *********
// **** ****
// ***   ***
// **     **
// *       *

let n = 5;
let px = n;
let py = n;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j < n * 2; j++) {
        if (j > px && j < py) {
            row += ' ';
        } else {
            row += '*';
        }
    }

    px--;
    py++;
    console.log(row);
}
 
Pattern 95

//     *        *
//    ***      ***
//   *****    *****
//  *******  *******
// ******************

let minStars = 1;
let pHeight = 5;
let pSpace = pHeight - 1;
let n;
let x = 1;

for (let i = 0; i < pHeight; i++) {
    let row = '';

    for (let j = pSpace; j > i; j--) {
        row += ' ';
    }

    for (let k = 0; k < minStars; k++) {
        row += '*';
    }

    for (n = pHeight + pHeight - 2; n >= x; n--) {
        row += ' ';
    }

    for (let k = 0; k < minStars; k++) {
        row += '*';
    }

    minStars += 2;
    x += 2;
    console.log(row);
}
 
Pattern 96

// 1 2 3 4 * 4 3 2 1
// 1 2 3 * * * 3 2 1
// 1 2 * * * * * 2 1
// 1 * * * * * * * 1
// * * * * * * * * *

let n = 5;
let x = n;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j < 2 * n; j++) {
        if (j >= x && j <= n + i - 1) {
            row += '* ';
        } else if (j <= n) {
            row += j + ' ';
        } else {
            row += (2 * n - j) + ' ';
        }
    }

    x--;
    console.log(row);
}
 
Pattern 97

//         *
//       # * #
//     * # * # *
//   # * # * # * #
// * # * # * # * # *

let n = 5;
let x = n;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j < 2 * n; j++) {
        if (j >= x && j < n + i && j % 2 === 1) {
            row += '* ';
        } else if (j >= x && j < n + i && j % 2 === 0) {
            row += '# ';
        } else {
            row += '  '; 
        }
    }

    x--;
    console.log(row);
}
 
Pattern 98

//          *
//         * *
//        * * *
//       * * * *
//     *         *
//    * *       * *
//   * * *     * * *
//  * * * *   * * * *
// * * * * * * * * * *

let p_height = 5;
let p_space = p_height - 1;
let x = 1;

for (let i = 1; i < p_height; i++) {
    let row = ' '.repeat(p_height);

    for (let k = p_space; k >= i; k--)
        row += ' ';

    for (let j = 1; j <= i; j++)
        row += '* ';

    console.log(row);
}

for (let i = 0; i < p_height; i++) {
    let row = ' '.repeat(p_space - i);

    for (let k = 0; k <= i; k++)
        row += '* ';

    for (let n = p_height + p_height - 2; n >= x; n--)
        row += ' ';

    for (let k = 0; k <= i; k++)
        row += '* ';

    x += 2;
    console.log(row);
}

 
Pattern 99

//     *
//    * *
//   *   *
//  *     *
// *********

let n = 5;
let px = n;
let py = n;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j < n * 2; j++) {
        if (j === px || j === py || i === n) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    px--;
    py++;
    console.log(row);
}
 
Pattern 100

// *
// **
// * *
// *  *
// * *
// **
// *

let n = 7;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= x; j++) {
        if (j === 1 || j === x) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);

    if (i <= n / 2) {
        x++;
    } else {
        x--;
    }
}
 
Pattern 101

//    *
//   **
//  * *
// *  *
//  * *
//   **
//    *

let n = 7;
let x = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= Math.floor(n / 2) + 1; j++) {
        if (j === x || j === Math.floor(n / 2) + 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    if (i <= Math.floor(n / 2)) {
        x--;
    } else {
        x++;
    }

    console.log(row);
}
 
Pattern 102

// *********
//  *     *
//   *   *
//    * *
//     *

let n = 5;
let x = 1;
let y = 2 * n - 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j < 2 * n; j++) {
        if (j === x || j === y || i === 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);
    x++;
    y--;
}
 
Pattern 103

// *           *
// * *       * *
// *   *   *   *
// *     *     *
// *   *   *   *
// * *       * *
// *           *

let n = 7;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (j === x || j === n - x + 1 || (j === 1 && i !== 1 && i !== n) || (j === n && i !== 1 && i !== n)) {
            row += '* ';
        } else {
            row += '  '; // Adjust spacing for better appearance
        }
    }

    if (i <= n / 2) {
        x++;
    } else {
        x--;
    }

    console.log(row);
}
 
Pattern 104

// *     *     *
//   *   *   *
//     * * *
// * * * * * * *
//     * * *
//   *   *   *
// *     *     *

let n = 7;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (j === i || j === n - i + 1 || i === Math.floor(n / 2) + 1 || j === Math.floor(n / 2) + 1) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}

 
Pattern 105

// *     * * * *
// *     *
// *     *
// * * * * * * *
//       *     *
//       *     *
// * * * *     *

let n = 7;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (
            i === Math.floor(n / 2) + 1 ||
            j === Math.floor(n / 2) + 1 ||
            (i === 1 && j >= Math.floor(n / 2) + 1) ||
            (i === n && j <= Math.floor(n / 2)) ||
            (j === 1 && i <= Math.floor(n / 2)) ||
            (j === n && i >= Math.floor(n / 2) + 1)
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
 
Pattern 106

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
 
Pattern 107

// * * * * * * * * *
// *               *
// *   * * * * *   *
// *   *       *   *
// *   *   *   *   *
// *   *       *   *
// *   * * * * *   *
// *               *
// * * * * * * * * *

let n = 9;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if ((j <= x || j >= n - x + 1) && j % 2 === 1) {
            row += "* ";
        } else if ((j >= x && j <= n - x + 1) && i % 2 === 1) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
    if (i <= n / 2) {
        x++;
    } else {
        x--;
    }
}

 
Pattern 108

//   *   *   *
// *   *   *   *
//   *   *   *
// *   *   *   *
//   *   *   *
// *   *   *   *
//   *   *   *

let n = 7;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if ((i + j) % 2 === 1) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}

 
Pattern 109

// *     *     *
// **   ***   **
// *** ***** ***
// *************
// *************
// *************
// *************

let n = 7;

let x = n;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j < 2 * n; j++) {
        if ((j >= x && j <= 2 * n - x) || j <= n - x + 1 || j >= n + x - 1) {
            row += "*";
        } else {
            row += " ";
        }
    }
    x--;
    console.log(row);
}

 
Pattern 110

//         *
//       * * *
//     *   *   *
//   *     *     *
// * * * * * * * * *
//   *     *     *
//     *   *   *
//       * * *
//         *

let n = 9;
let c1 = (n - 1) / 2;
let c2 = 3 * n / 2 - 1;

for (let i = 0; i < n; i++) {
    let output = '';
    for (let j = 0; j < n; j++) {
        if (i + j === c1 || i - j === c1 || j - i === c1 || i + j === c2 || i === c1 || j === c1) {
            output += "* ";
        } else {
            output += "  ";
        }
    }
    console.log(output);
}
 
Pattern 111

// * * * * * * * * *
// * * * *   * * * *
// * * *       * * *
// * *           * *
// *               *
// * *           * *
// * * *       * * *
// * * * *   * * * *
// * * * * * * * * *

let n = 9;
let c1 = (n - 1) / 2;
let c2 = 3 * n / 2 - 1;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        if (i + j <= c1 || i - j >= c1 || j - i >= c1 || i + j >= c2) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
 
Pattern 112

// * * * * * * * *
// * * *   * * * *
// * *       * * *
// *           * *
// * *           *
// * * *       * *
// * * * *   * * *
// * * * * * * * *

let n = 8;
let c1 = (n - 1) / 2;
let c2 = 3 * n / 2 - 1;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        if (i + j <= c1 || i - j >= c1 || j - i >= c1 || i + j >= c2) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
 
Pattern 113

// *     *
// **   **
// *** ***
// *******
// *** ***
// **   **
// *     *

let n = 7;
let px = 1;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (j <= px || j >= n - px + 1) {
            row += "*";
        } else {
            row += " ";
        }
    }

    if (i <= n / 2) {
        px++;
    } else {
        px--;
    }
    console.log(row);
}
 
Pattern 114

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
 
Pattern 115

// **
// **
// ****
// ****
// ******
// ******

for (let i = 1; i <= 6; i++) {
    let k = (i % 2 !== 0) ? i + 1 : i;

    let line = '';
    for (let j = 0; j < k; j++) {
        line += '*';
    }

    console.log(line);
}

 
Pattern 116

//     **
//     **
//   ****
//   ****
// ******
// ******

for (let i = 1; i <= 6; i++) {
    let k = (i % 2 !== 0) ? i + 1 : i;

    let spaces = '';
    for (let g = 6; g > k; g--) {
        spaces += ' ';
    }

    let line = '';
    for (let j = 0; j < k; j++) {
        line += '*';
    }

    console.log(spaces + line);
}

 
Pattern 117

// ******
// ******
// ****
// ****
// **
// **

let n = 6;

for (let i = n; i > 0; i--) {
    let k = (i % 2 !== 0) ? i + 1 : i;

    let line = '';
    for (let j = 0; j < k; j++) {
        line += '*';
    }

    console.log(line);
}

 
Pattern 118

// ******
// ******
//   ****
//   ****
//     **
//     **

let n = 6;

for (let i = n; i > 0; i--) {
    let k = (i % 2 !== 0) ? i + 1 : i;

    let line = '';
    for (let x = k; x < n; x++) {
        line += ' ';
    }
    for (let j = 0; j < k; j++) {
        line += '*';
    }

    console.log(line);
}
 
Pattern 119

// *
// *
// **
// **
// ***
// ***

let n = 3;

for (let i = 1; i <= n; i++) {
    for (let c = n - 1; c > 0; c--) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

 
Pattern 120

//   *
//   *
//  **
//  **
// ***
// ***

for (let i = 1; i <= 3; i++) {
    for (let x = 2; x > 0; x--) {
        let spaces = '';
        for (let y = 2; y >= i; y--) {
            spaces += ' ';
        }
        let stars = '';
        for (let j = 0; j < i; j++) {
            stars += '*';
        }
        console.log(spaces + stars);
    }
}
 
Pattern 121

// ***
// ***
// **
// **
// *
// *

for (let i = 3; i >= 1; i--) {
    for (let x = 2; x > 0; x--) {
        let stars = '';
        for (let j = 0; j < i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}
 
Pattern 122

// ***
// ***
//  **
//  **
//   *
//   *

for (let i = 3; i >= 1; i--) {
    for (let x = 2; x > 0; x--) {
        let spaces = '';
        for (let y = 2; y >= i; y--) {
            spaces += ' ';
        }
        let stars = '';
        for (let j = 0; j < i; j++) {
            stars += '*';
        }
        console.log(spaces + stars);
    }
}
 
Pattern 123

//   *
//   *
//  ***
//  ***
// *****
// *****

const n = 3;
let z = 1;

for (let i = 0; i < n; i++) {
    for (let j = 2; j > 0; j--) {
        let spaces = '';
        for (let x = n - 1; x > i; x--) {
            spaces += ' ';
        }
        let stars = '';
        for (let y = 0; y < z; y++) {
            stars += '*';
        }
        console.log(spaces + stars);
    }
    z += 2;
}
 
Pattern 124

//       **
//       **
//     *    *
//     *    *
//   *        *
//   *        *
// *            *

const n = 7;
let x = n;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= 2 * n; j++) {
        if (j === x || j === 2 * n - x + 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
    if (i % 2 === 0) {
        x -= 2;
    }
}
 
Pattern 125

// *****
//   ***
//     *
//   ***
// *****

const n = 3;
let s1 = n * 2 - 1, s2 = 3;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j < i; j++) {
        row += '  ';
    }
    for (let k = 1; k <= s1; k++) {
        row += '*';
    }
    s1 -= 2;
    console.log(row);
}

for (let i = 1; i <= n - 1; i++) {
    let row = '';
    for (let j = n - 2; j >= i; j--) {
        row += '  ';
    }
    for (let k = 1; k <= s2; k++) {
        row += '*';
    }
    s2 += 2;
    console.log(row);
}
 
Pattern 126

//     * * * * * *
//   * * * * * * * *
//  * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * *
//  * * * * * * * * *
//   * * * * * * * *
//     * * * * * *

for (let i = 1; i <= 9; i++) {
    let x, z;
    
    switch (i) {
        case 1:
        case 9:
            x = 6;
            z = 4;
            break;
        case 2:
        case 8:
            x = 8;
            z = 2;
            break;
        case 3:
        case 7:
            x = 9;
            z = 1;
            break;
        default:
            x = 10;
            z = 0;
    }
    
    let row = '';
    
    for (let j = 1; j <= z; j++) {
        row += ' ';
    }

    for (let k = 1; k <= x; k++) {
        row += '* ';
    }

    console.log(row);
}
 
Pattern 127

//  ***   ***
// ***** *****
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

const n = 6;

// Top part of the heart
for (let i = n / 2; i <= n; i += 2) {
    let row = '';

    for (let j = 1; j < n - i; j += 2) {
        row += ' ';
    }

    for (let j = 1; j <= i; j++) {
        row += '*';
    }

    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }

    for (let j = 1; j <= i; j++) {
        row += '*';
    }

    console.log(row);
}

// Bottom part of the heart
for (let i = n; i >= 1; i--) {
    let row = '';

    for (let j = i; j < n; j++) {
        row += ' ';
    }

    for (let j = 1; j <= (i * 2) - 1; j++) {
        row += '*';
    }

    console.log(row);
}

 
Pattern 128

//  ** **
// *  *  *
// *     *
//  *   *
//   * *
//    *

for (let row = 0; row < 6; row++) {
    let rowOutput = '';
    for (let col = 0; col < 7; col++) {
        if ((row === 0 && col % 3 !== 0) || (row === 1 && col % 3 === 0) || (row - col === 2) || (row + col === 8)) {
            rowOutput += '*';
        } else {
            rowOutput += ' ';
        }
    }
    console.log(rowOutput);
}

 
Pattern 129: X-Max Tree

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
 
Pattern 130

// * * * * *
// *     * *
// *   *   *
// * *     *
// * * * * *

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n || i + j === n + 1) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
 
Pattern 131

//   * *
// *   *
//     *
//     *
// * * * * *

let n = 5;
let mid = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (j === mid || i === n || (i + j === mid && j <= mid)) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
 
Pattern 132

// * * * * *
//         *
// * * * * *
// *
// * * * * *

let n = 5;
let mid = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || i === mid || (j === 1 && i >= mid) || (j === n && i < mid)) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
 
Pattern 133

// * * * * *
//         *
// * * * * *
//         *
// * * * * *

let n = 5;
let mid = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || i === mid || j === n) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
 
Pattern 134

// *       *
// *       *
// * * * * *
//         *
//         *

let n = 5;
let mid = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === mid || (j === 1 && i <= mid) || j === n) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}

 
Pattern 135

// * * * * *
// *
// * * * * *
//         *
// * * * * *

let n = 5;
let mid = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || i === mid || (j === 1 && i <= mid) || (j === n && i > mid)) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
 
Pattern 136

// * * * * *
// *
// * * * * *
// *       *
// * * * * *

let n = 5;
let mid = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || i === mid || j === 1 || (j === n && i > mid)) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
 
Pattern 137

// * * * *
//       *
//     *
//   *
// *

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - 1; j++) {
        if (i === 1 || i + j === n + 1) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
 
Pattern 138

// * * * * *
// *       *
// * * * * *
// *       *
// * * * * *

let n = 5;
let mid = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || i === mid || j === 1 || j === n) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
 
Pattern 139

// * * * * *
// *       *
// * * * * *
//         *
// * * * * *

let n = 5;
let mid = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || i === mid || (j === 1 && i <= mid) || j === n) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
 
Pattern 140

//     *
//    * *
//   *****
//  *     *
// *       *

let n = 5;
let x = n;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= 2 * n; j++) {
        if (j === x || j === n + i - 1) {
            row += '*';
        } else if (j >= x && j <= n + i - 1 && i === Math.floor(n / 2) + 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
    x--;
}
 
Pattern 141

// ****
// *   *
// *****
// *   *
// ****

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (j === 1 || (i === 1 || i === n || i === Math.floor(n / 2) + 1) && j <= n - 1) {
            row += '*';
        } else if (i !== 1 && i !== n && j === n) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}
 
Pattern 142

// *****
// *
// *
// *
// *****

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1) {
            row += '*';
        }
    }
    console.log(row);
}
 
Pattern 143

// ****
// *   *
// *   *
// *   *
// ****

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (j === 1 || (i === 1 || i === n) && j <= n - 1) {
            row += '*';
        } else if (i !== 1 && i !== n && j === n) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}

 
Pattern 144

// *****
// *
// *****
// *
// *****

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (j === 1 || i === 1 || i === n || i === Math.floor(n / 2) + 1) {
            row += '*';
        }
    }
    console.log(row);
}
 
Pattern 145

// *****
// *
// *****
// *
// *

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (j === 1 || i === 1 || i === Math.floor(n / 2) + 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}

 
Pattern 146

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
 
Pattern 147

// *       *
// *       *
// * * * * *
// *       *
// *       *

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (j === 1 || j === n || i === Math.floor(n / 2) + 1) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
 
Pattern 148

// * * * * *
//     *
//     *
//     *
// * * * * *

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === Math.floor(n / 2) + 1) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
 
Pattern 149

// * * * * *
//     *
//     *
//     *
// * * *

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (i === 1 || (i === n && j <= Math.floor(n / 2) + 1) || j === Math.floor(n / 2) + 1) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
 
Pattern 150

// *   *
// * *
// *
// * *
// *   *

let n = 5;
let x = Math.floor(n / 2) + 1;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= Math.floor(n / 2) + 1; j++) {
        if (j === 1 || j === x) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    if (i <= Math.floor(n / 2)) {
        x--;
    } else {
        x++;
    }
    console.log(row);
}
 
Pattern 151

// *
// *
// *
// *
// * * *

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (j === 1 || (i === n && j <= Math.floor(n / 2) + 1)) {
            row += "* ";
        }
    }
    console.log(row);
}
 
Pattern 152

// *       *
// * *   * *
// *   *   *
// *       *
// *       *

let n = 5;
let x = 1;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (j === 1 || j === n || (j === x || j === n - x + 1) && i <= Math.floor(n / 2) + 1) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    x++;
    console.log(row);
}

 
Pattern 153

// *       *
// * *     *
// *   *   *
// *     * *
// *       *

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (j === 1 || j === n || i === j) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}

 
Pattern 154

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        if (j === 1 || j === n || i === 1 || i === n) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}

 
Pattern 155

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

 
Pattern 156

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

 
Pattern 157

// * * *
// *   *
// * * *
// * *
// *   *

let n = 5;
let x = 1;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= Math.floor(n / 2) + 1; j++) {
        if (j === 1 || i === 1 || i === Math.floor(n / 2) + 1 || (i <= Math.floor(n / 2) && j === Math.floor(n / 2) + 1) || j === x) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    if (i > Math.floor(n / 2)) {
        x++;
    }
    console.log(row);
}

 
Pattern 158

// * * * * *
// *
// * * * * *
//         *
// * * * * *

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || i === Math.floor(n / 2) + 1 || (j === 1 && i <= Math.floor(n / 2) + 1) || (j === n && i > Math.floor(n / 2) + 1)) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}

 
Pattern 159

// * * * * *
//     *
//     *
//     *
//     *

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || j === Math.floor(n / 2) + 1) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}


 
Pattern 160

// *       *
// *       *
// *       *
// *       *
// * * * * *

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (j === 1 || j === n || i === n) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
 
Pattern 161
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
 
Pattern 162

// *   *   *
// *  * *  *
// * *   * *
// **     **
// *       *

let n = 5;
let x = n;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= 2 * n - 1; j++) {
        if (j === 1 || j === 2 * n - 1 || j === x || j === 2 * n - x) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
    x--;
}

 
Pattern 163

// *       *
//   *   *
//     *
//   *   *
// *       *

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= 5; j++) {
        if (j === i || j === 5 - i + 1) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
 
Pattern 164

// *       *
//   *   *
//     *
//     *
//     *

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if ((j === i || j === n - i + 1) && i <= Math.floor(n / 2) + 1 || (j === Math.floor(n / 2) + 1 && i > Math.floor(n / 2))) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
 
Pattern 165

// * * * * *
//       *
//     *
//   *
// * * * * *

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= 5; j++) {
        if (i === 1 || i === 5 || j === 5 - i + 1) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
