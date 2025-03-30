# 150+ C Pattern Programs

Pattern 1
// *****
// *****
// *****
// *****
// *****

#include <stdio.h>

int main()
{
    int i, j;

    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= 5; j++)
        {
            printf("*"); // put any character
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 2
// *
// **
// ***
// ****
// *****

#include <stdio.h>

int main()
{
    int i, j;

    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 3
// *****
// ****
// ***
// **
// *

#include <stdio.h>

int main()
{
    int i, j;

    for (i = 1; i <= 5; i++)
    {
        for (j = 5; j >= i; j--)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 4
//     *
//    **
//   ***
//  ****
// *****

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j, k;

    for (i = 1; i <= n; i++)
    {
        for (j = n - 1; j >= i; j--)
        {
            printf(" ");
        }
        for (k = 1; k <= i; k++)
        {
            printf("*");
        }

        printf("\n");
    }
    return 0;
}

 
Pattern 5
// *****
//  ****
//   ***
//    **
//     *

#include<stdio.h>

int main() 
{
    int n = 5;
    int i, j, k;

    for(i = n; i >= 1; i--) 
    {
        for(j = n - 1; j >= i; j--)
        {
            printf(" ");
        }
        for(k = 1; k <= i; k++)
        {
            printf("*");
        }
        printf("\n");
    }

    return 0;
}

 
Pattern 6

//     *
//    * *
//   * * *
//  * * * *

#include <stdio.h>
#include <conio.h>
int main()
{
    int i, j, k;

    int p_height = 5;

    for (i = 1; i < p_height; i++)
    {
        for (k = p_height - 1; k >= i; k--)
        {
            printf(" ");
        }
        for (j = 1; j <= i; j++)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 7
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

#include <stdio.h>

int main()
{
    int i, j, k;

    int p_height = 5;

    for (i = p_height; i >= 1; i--)
    {
        for (k = p_height - 1; k >= i; k--)
        {
            printf(" ");
        }
        for (j = i; j >= 1; j--)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 8

//     *
//    ***
//   *****
//  *******
// *********

#include <stdio.h>

int main()
{
    int min_stars = 1;
    int p_height = 5;
    int p_space = p_height - 1;
    int i, j, k;

    for (i = 0; i < p_height; i++)
    {
        for (j = p_space; j > i; j--)
        {
            printf(" ");
        }
        for (k = 0; k < min_stars; k++)
        {
            printf("*");
        }
        min_stars += 2;
        printf("\n");
    }
}
 
Pattern 9

// *********
//  *******
//   *****
//    ***
//     *

#include <stdio.h>

int main()
{
    int p_height = 5;
    int max_stars = p_height * 2 - 1;

    int p_space = p_height - 1;
    int i, j, k;

    for (i = p_height; i >= 1; i--)
    {
        for (j = p_space; j >= i; j--)
        {
            printf(" ");
        }
        for (k = 1; k <= max_stars; k++)
        {
            printf("*");
        }
        max_stars -= 2;
        printf("\n");
    }
    return 0;
}
 
Pattern 10

// *
// **
// ***
// ****
// ***
// **
// *

#include <stdio.h>
#include <math.h>
int main()
{
    int size = 3;
    int i, j;

    for (i = size; i >= -size; i--)
    {
        for (j = size; j >= abs(i); j--)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 11
//    *
//   **
//  ***
// ****
//  ***
//   **
//    *

#include <stdio.h>
#include <math.h>

int main()
{
    int size = 3;
    int i, j, k;

    for (i = size; i >= -size; i--)
    {
        for (j = 1; j <= abs(i); j++)
        {
            printf(" ");
        }

        for (k = size; k >= abs(i); k--)
        {
            printf("*");
        }
        printf("\n");
    }

    return 0;
}

 
Pattern 12

// 1****
// 22***
// 333**
// 4444*
// 55555

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j > i)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 13

// 1****
// 12***
// 123**
// 1234*
// 12345

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j > i)
                printf("*");
            else
                printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 14

// 55555
// 4444*
// 333**
// 22***
// 1****

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;
    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= n; j++)
        {
            if (j > i)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 15

// 12345
// 1234*
// 123**
// 12***
// 1****

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;
    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= n; j++)
        {
            if (j > i)
                printf("*");
            else
                printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 16

// ****1
// ***22
// **333
// *4444
// 55555

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;
    for (i = 1; i <= n; i++)
    {
        for (j = n; j >= 1; j--)
        {
            if (j > i)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 17

// ****1
// ***21
// **321
// *4321
// 54321

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;
    for (i = 1; i <= n; i++)
    {
        for (j = n; j >= 1; j--)
        {
            if (j > i)
                printf("*");
            else
                printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 18

// 55555
// *4444
// **333
// ***22
// ****1

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;
    for (i = n; i >= 1; i--)
    {
        for (j = n; j >= 1; j--)
        {
            if (j > i)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 19

// 54321
// *4321
// **321
// ***21
// ****1

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;
    for (i = n; i >= 1; i--)
    {
        for (j = n; j >= 1; j--)
        {
            if (j > i)
                printf("*");
            else
                printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 20

// A****
// BB***
// CCC**
// DDDD*
// EEEEE

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            if (j > i)
                printf("*");
            else
                printf("%c", i + 65);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 21

// A****
// AB***
// ABC**
// ABCD*
// ABCDE

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            if (j > i)
                printf("*");
            else
                printf("%c", j + 65);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 22

// EEEEE
// DDDD*
// CCC**
// BB***
// A****

#include <stdio.h>
int main()
{
    int i, j;
    int n = 4;
    for (i = n; i >= 0; i--)
    {
        for (j = 0; j <= n; j++)
        {
            if (j > i)
                printf("*");
            else
                printf("%c", i + 65);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 23

// ABCDE
// ABCD*
// ABC**
// AB***
// A****

#include <stdio.h>
int main()
{
    int i, j;
    int n = 4;
    for (i = n; i >= 0; i--)
    {
        for (j = 0; j <= n; j++)
        {
            if (j > i)
                printf("*");
            else
                printf("%c", j + 65);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 24

// ****A
// ***BB
// **CCC
// *DDDD
// EEEEE

#include <stdio.h>
int main()
{
    int i, j;
    int n = 4;
    for (i = 0; i <= n; i++)
    {
        for (j = n; j >= 0; j--)
        {
            if (j > i)
                printf("*");
            else
                printf("%c", i + 65);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 25

// ****A
// ***BA
// **CBA
// *DCBA
// EDCBA

#include <stdio.h>
int main()
{
    int i, j;
    int n=4;
    for(i=0; i<=n; i++)
    {
        for(j=n; j>=0; j--)
        {
            if(j>i)
            printf("*");
            else
            printf("%c", j+65);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 26

// EEEEE
// *DDDD
// **CCC
// ***BB
// ****A

#include <stdio.h>
int main()
{
    int i, j;
    int n =4;
    for(i =n; i>=0; i--)
    {
        for(j=n; j>=0; j--)
        {
            if(j>i)
            printf("*");
            else
            printf("%c", i+65);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 27

// EDCBA
// *DCBA
// **CBA
// ***BA
// ****A

#include <stdio.h>
int main()
{
    int i, j;
    int n = 4;
    for (i = n; i >= 0; i--)
    {
        for (j = n; j >= 0; j--)
        {
            if (j > i)
                printf("*");
            else
                printf("%c", j + 65);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 28
// 1 2 3 4 *
// 1 2 3 * 5
// 1 2 * 4 5
// 1 * 3 4 5
// * 2 3 4 5

#include <stdio.h>
int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == n - i + 1)
            {
                printf("* ");
            }
            else
            {
                printf("%d ", j);
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 29

//  * 1 * 2 *
//  3 * 4 * 5
//  * 6 * 7 *
//  8 * 9 *10
//  *11 *12 *

#include <stdio.h>
int main()
{
    int n = 5;
    int i, j;
    int x = 1;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if ((i + j) % 2 == 1)
            {
                printf("%2d", x++);
            }
            else
            {
                printf("%2c", '*');
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 30

// * A* B*
// C* D* E
// * F* G*
// H* I* J
// * K* L*

#include <stdio.h>
int main()
{
    int n = 5;
    int i, j;

    char x = 'A';

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if ((i + j) % 2 == 1)
            {
                printf("%c", x++);
            }
            else
            {
                printf("* ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 31

// * # # # # # #
// # # # # # * *
// * * * # # # #
// # # # * * * *
// * * * # # # #
// # # # # # * *
// * # # # # # #

#include <stdio.h>

int main()
{
    int n = 7;
    int x = 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i % 2 == 1 && j <= x)
            {
                printf("* ");
            }
            else if (i % 2 == 0 && j >= n - x + 1)
            {
                printf("* ");
            }
            else
            {
                printf("# ");
            }
        }
        printf("\n");
        if (i <= n / 2)
            x++;
        else
            x--;
    }
    return 0;
}
 
Pattern 32

// * 0 0 0 * 0 0 0 *
// 0 * 0 0 * 0 0 * 0
// 0 0 * 0 * 0 * 0 0
// 0 0 0 * * * 0 0 0
// 0 0 0 0 * 0 0 0 0

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < 2 * n; j++)
        {
            if (j == i || j == 2 * n - i || j == n)
            {
                printf("* ");
            }
            else
            {
                printf("0 ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 33

// 1
// 1* 2
// 1* 2* 3
// 1* 2* 3* 4
// 1* 2* 3* 4* 5

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("%d", j);
            if (j != i)
            {
                printf("* ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 34
//  1
//  3*  2
//  4*  5*  6
// 10*  9*  8*  7
// 11* 12* 13* 14* 15

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    int px = 1, py = 1, t;

    for (i = 1; i <= n; i++)
    {
        t = py;
        for (j = 1; j <= i; j++)
        {
            if (i % 2 == 1)
            {
                printf("%2d", px);
            }
            else
            {
                printf("%2d", t);
            }
            t--;
            px++;

            if (j != i)
                printf("* ");
        }
        py = py + i + 1;
        printf("\n");
    }
    return 0;
}
 
Pattern 35

// #
// **
// ###
// ****
// #####

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= i; j++)
        {
            if (i % 2 == 0)
                printf("*");
            else
                printf("#");
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 36

// 1
// **
// 333
// ****
// 55555

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= i; j++)
        {
            if (i % 2 == 0)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 37

// 1
// **
// 123
// ****
// 12345

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= i; j++)
        {
            if (i % 2 == 0)
                printf("*");
            else
                printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 38

// 1
// 1*
// 1*3
// 1*3*
// 1*3*5

int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= i; j++)
        {
            if (j % 2 == 0)
                printf("*");
            else
                printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 39

// 1
// 2*
// 3*3
// 4*4*
// 5*5*5

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= i; j++)
        {
            if (j % 2 == 0)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 40

// #####
// ****
// ###
// **
// #

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= i; j++)
        {
            if (i % 2 == 0)
                printf("*");
            else
                printf("#");
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 41

// #*#*#
// #*#*
// #*#
// #*
// #

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= i; j++)
        {
            if (j % 2 == 0)
                printf("*");
            else
                printf("#");
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 42

// 55555
// ****
// 333
// **
// 1

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= i; j++)
        {
            if (i % 2 == 0)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 43

// 12345
// ****
// 123
// **
// 1

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= i; j++)
        {
            if (i % 2 == 0)
                printf("*");
            else
                printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 44

// 1*3*5
// 1*3*
// 1*3
// 1*
// 1

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= i; j++)
        {
            if (j % 2 == 0)
                printf("*");
            else
                printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 45

// 1*3*5
// 1*3*
// 1*3
// 1*
// 1

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= i; j++)
        {
            if (j % 2 == 0)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 46

//     #
//    **
//   ###
//  ****
// #####

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;
    
    for(i = n; i>=1; i--)
    {
        for(j=1; j<=n;j++)
        {
            if(i<=j)
            {
                if(i%2==0)
                printf("*");
                else
                printf("#");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 47

//     #
//    *#
//   #*#
//  *#*#
// #*#*#

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (j % 2 == 0)
                    printf("*");
                else
                    printf("#");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 48

//     1
//    **
//   333
//  ****
// 55555

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (i % 2 == 0)
                    printf("*");
                else
                    printf("%d", i);
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 49

//     1
//    **
//   321
//  ****
// 54321

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (i % 2 == 0)
                    printf("*");
                else
                    printf("%d", j);
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
} 
 
Pattern 50

//     5
//    **
//   345
//  ****
// 12345

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= n; j++)
        {
            if (i <= j)
            {
                if (i % 2 == 0)
                    printf("*");
                else
                    printf("%d", j);
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 51

//     1
//    *1
//   3*1
//  *3*1
// 5*3*1

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (j % 2 == 0)
                    printf("*");
                else
                    printf("%d", j);
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 52

//     1
//    *2
//   3*3
//  *4*4
// 5*5*5

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (j % 2 == 0)
                    printf("*");
                else
                    printf("%d", i);
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 53

// #####
//  ****
//   ###
//    **
//     #

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (i % 2 == 0)
                    printf("*");
                else
                    printf("#");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 54

// #*#*#
//  *#*#
//   #*#
//    *#
//     #

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (j % 2 == 0)
                    printf("*");
                else
                    printf("#");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 55

// 55555
//  ****
//   333
//    **
//     1

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (i % 2 == 0)
                    printf("*");
                else
                    printf("%d", i);
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 56

// 54321
//  ****
//   321
//    **
//     1

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (i % 2 == 0)
                    printf("*");
                else
                    printf("%d", j);
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 57

// 5*3*1
//  *3*1
//   3*1
//    *1
//     1

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (j % 2 == 0)
                    printf("*");
                else
                    printf("%d", j);
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 58

//     #
//    * *
//   # # #
//  * * * *
// # # # # #

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= n; j++)
        {
            if (i <= j)
            {
                if (i % 2 == 0)
                    printf("* ");
                else
                    printf("# ");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 59

//     #
//    * #
//   # * #
//  * # * #

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = n; j >= 1; j--)
        {
            if (i > j)
            {
                if (j % 2 == 0)
                    printf("* ");
                else
                    printf("# ");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 60

//     1
//    * *
//   3 3 3
//  * * * *
// 5 5 5 5 5

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (i % 2 == 0)
                    printf("* ");
                else
                    printf("%d ", i);
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 61

// # # # # #
//  * * * *
//   # # #
//    * *
//     #

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (i % 2 == 0)
                    printf("* ");
                else
                    printf("# ");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 62

// # * # * #
//  * # * #
//   # * #
//    * #
//     #

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (j % 2 == 0)
                    printf("* ");
                else
                    printf("# ");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 63

// 5 5 5 5 5
//  * * * *
//   3 3 3
//    * *
//     1

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (i % 2 == 0)
                    printf("* ");
                else
                    printf("%d ", i);
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 64

// 0
// 1*
// 2**
// 3***
// 4****
// 5*****

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;
    for (i = 0; i <= n; i++)
    {
        for (j = 0; j <= i; j++)
        {
            if (j != 0)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 65

// 5*****
// 4****
// 3***
// 2**
// 1*
// 0

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;
    for (i = n; i >= 0; i--)
    {
        for (j = 0; j <= i; j++)
        {
            if (j != 0)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 66

// 0
// *1
// **2
// ***3
// ****4
// *****5

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;
    for (i = 0; i <= n; i++)
    {
        for (j = 0; j <= i; j++)
        {
            if (i > j)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 67

// *****5
// ****4
// ***3
// **2
// *1
// 0

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;
    for (i = n; i >= 0; i--)
    {
        for (j = 0; j <= i; j++)
        {
            if (i > j)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 68

// *   *
//  * *
//   *
//  * *
// *   *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == j || i + j == n + 1)
                printf("*");
            else
                printf(" ");
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 69

//   *
//   *
// *****
//   *
//   *

#include <stdio.h>

int main()
{
    int i, j;

    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= 5; j++)
        {
            if (j == 3 || i == 3)
                printf("*");
            else
                printf(" ");
        }
        printf("\n");
    }

    return 0;
}

 
Pattern 70

// *****
// *   *
// *   *
// *   *
// *****

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if ((j == 1 || j == n) || (i == 1 || i == n))
                printf("*");
            else
                printf(" ");
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 71

// *****
// *###*
// *###*
// *###*
// *****

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if ((j == 1 || j == n) || (i == 1 || i == n))
                printf("*");
            else
                printf("#");
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 72

// *******
// **   **
// * * * *
// *  *  *
// * * * *
// **   **
// *******

#include <stdio.h>

int main()
{
    int i, j;
    int n = 7;

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            if (i == 0 || j == 0 || i == j || i == n - 1 || j == n - 1 || i + j == n - 1)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 73

// *
// * *
// *   *
// *     *
// *       *
// *         *
// * * * * * * *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == 1 || i == j || i == n)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 74

// * * * * * * *
// *         *
// *       *
// *     *
// *   *
// * *
// *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    for (i = n; i >= 1; i--)
    {
        for (j = n; j >= 1; j--)
        {
            if (j == n - i + 1 || j == n || i == n)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 75

//         *
//       * *
//     *   *
//   *     *
// * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == n - i + 1 || j == n || i == n)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 76

// * * * * *
//   *     *
//     *   *
//       * *
//         *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == n - i + 1 || j == n || i == n)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 77

//     *
//    * *
//   *   *
//  *     *
// *       *

#include <stdio.h>

int main()
{
    int n = 5;

    int px = n;
    int py = n;

    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n * 2; j++)
        {
            if (j == px || j == py)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        px--;
        py++;
        printf("\n");
    }
    return 0;
}
 
Pattern 78

// *       *
//  *     *
//   *   *
//    * *
//     *

#include <stdio.h>

int main()
{
    int n = 5;

    int px = 1;
    int py = n * 2 - 1;

    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n * 2; j++)
        {
            if (j == px || j == py)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        px++;
        py--;
        printf("\n");
    }
    return 0;
}
 
Pattern 79

// *
//  *
//   *
//    *
//   *
//  *
// *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    int x = 1;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= x; j++)
        {
            if (j == x)
                printf("* ");
            else
                printf(" ");
        }
        printf("\n");
        if (i <= n / 2)
            x++;
        else
            x--;
    }
    return 0;
}
 
Pattern 80

//    *
//   *
//  *
// *
//  *
//   *
//    *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;
    int x = n / 2 + 1;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= x; j++)
        {
            if (j == x)
            {
                printf("* ");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");

        if (i <= n / 2)
        {
            x--;
        }
        else
        {
            x++;
        }
    }
    return 0;
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

#include <stdio.h>

int main()
{
    int n = 9;

    int px = n / 2 + 1;

    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == px || j == n - px + 1)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        if (i <= n / 2)
            px--;
        else
            px++;
        printf("\n");
    }
    return 0;
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

#include <stdio.h>

int main()
{
    int n = 10;

    int px = n / 2;
    int py = n / 2;

    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if ((i == 1 || i == n) && j == n / 2)
            {
                printf("*");
            }
            else if (j == px)
            {
                printf("/");
            }
            else if (j == py)
            {
                printf("\\");
            }
            else
            {
                printf(" ");
            }
        }

        if (i == n / 2)
        {
            int t = px;
            px = py;
            py = t;
        }
        else
        {
            px--;
            py++;
        }
        printf("\n");
    }
    return 0;
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

#include <stdio.h>

int main()
{
    int n = 10;
    int px = n / 2;
    int py = n / 2;

    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n - 1; j++)
        {
            if ((i == 1 || i == n) && j == n / 2)
            {
                printf("*");
            }
            else if (j == px || j == py)
            {
                printf("-");
            }
            else
            {
                printf(" ");
            }
        }
        if (i == n / 2)
        {
            int t = px;
            px = py;
            py = t;
        }
        else
        {
            px--;
            py++;
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 84

//    *
//   * *
//  * * *
// * * * *
//  * * *
//   * *
//    *

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int size = 3;
    int i, j, k;

    for (i = size; i >= -size; i--)
    {
        for (j = 1; j <= abs(i); j++)
        {
            printf(" ");
        }
        for (k = size; k >= abs(i); k--)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
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

int main()
{
    int n = 3;
    int i, j, k;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            for (k = 1; k <= j; k++)
            {
                printf("*");
            }
            printf("\n");
        }
    }

    return 0;
}

 
Pattern 86

// *
// * *
// 123
// * *
// *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;
    int x = 1;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= x; j++)
        {
            if (i != n / 2 + 1)
            {
                printf("* ");
            }
            else
            {
                printf("%d", j);
            }
        }
        if (i <= n / 2)
            x++;
        else
            x--;
        printf("\n");
    }
    return 0;
}
 
Pattern 87

// *
// * *
// ABC
// * *
// *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;
    int x = 1;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= x; j++)
        {
            if (i != n / 2 + 1)
            {
                printf("* ");
            }
            else
            {
                printf("%c", 64 + j);
            }
        }
        if (i <= n / 2)
            x++;
        else
            x--;
        printf("\n");
    }
    return 0;
}
 
Pattern 88

// 1
// 2* 2
// 3* 3* 3
// 4* 4* 4* 4
// 3* 3* 3
// 2* 2
// 1

#include <stdio.h>

int main()
{
    int n = 7;
    int x = 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < 2 * x; j++)
        {
            if (i <= n / 2 + 1 && j % 2 == 1)
            {
                printf("%d", i);
            }
            else if (i > n / 2 + 1 && j % 2 == 1)
            {
                printf("%d", n - i + 1);
            }
            else
            {
                printf("* ");
            }
        }
        if (i <= n / 2)
            x++;
        else
            x--;
        printf("\n");
    }
    return 0;
}

 
Pattern 89

// * * * * * * *
//   * * * * *
//     * * *
//       *
//     * * *
//   * * * * *
// * * * * * * *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    int x = 1;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j >= x && j <= n - x + 1)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        if (i <= n / 2)
            x++;
        else
            x--;
        printf("\n");
    }
    return 0;
}
 
Pattern 90

// *           *
// * *       * *
// * * *   * * *
// * * * * * * *
// * * *   * * *
// * *       * *
// *           *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    int x = 1;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j <= x || j >= n - x + 1)
                printf("* ");
            else
                printf("  ");
        }
        if (i <= n / 2)
            x++;
        else
            x--;
        printf("\n");
    }
    return 0;
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


#include <stdio.h>
#include <math.h>
int main()
{
    int size = 4;
    int i, j;

    for (i = size; i >= -size; i--)
    {
        for (j = 0; j <= abs(i); j++)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 92

// * * * *
//   * * *
//     * *
//       *
//     * *
//   * * *
// * * * *

#include <stdio.h>
#include <math.h>
int main()
{
    int n = 7;
    int x = 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n / 2 + 1; j++)
        {
            if (j >= x)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        if (i <= n / 2)
            x++;
        else
            x--;
        printf("\n");
    }
    return 0;
}
Pattern 93

// *       *
// **     **
// ***   ***
// **** ****
// *********

#include <stdio.h>

int main()
{
    int n = 5;

    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < n * 2; j++)
        {
            if (j <= i || j >= n * 2 - i)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 94

// *********
// **** ****
// ***   ***
// **     **
// *       *

#include <stdio.h>

int main()
{
    int n = 5;
    int px = n;
    int py = n;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < n * 2; j++)
        {
            if (j > px && j < py)
            {
                printf(" ");
            }
            else
            {
                printf("*");
            }
        }
        px--;
        py++;
        printf("\n");
    }
    return 0;
}
 
Pattern 95

//     *        *
//    ***      ***
//   *****    *****
//  *******  *******
// ******************

#include <stdio.h>

int main()
{
    int min_stars = 1;

    int p_height = 5;
    int p_space = p_height - 1;
    int i, j, k;
    int n;
    int x = 1;
    for (i = 0; i < p_height; i++)
    {
        for (j = p_space; j > i; j--)
        {
            printf(" ");
        }
        for (k = 0; k < min_stars; k++)
        {
            printf("*");
        }
        for (n = (p_height + p_height - 2); n >= x; n--)
        {
            printf(" ");
        }
        for (k = 0; k < min_stars; k++)
        {
            printf("*");
        }

        min_stars += 2;
        x += 2;
        printf("\n");
    }
    return 0;
}
 
Pattern 96

// 1 2 3 4 * 4 3 2 1
// 1 2 3 * * * 3 2 1
// 1 2 * * * * * 2 1
// 1 * * * * * * * 1
// * * * * * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    int x = n;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < 2 * n; j++)
        {
            if (j >= x && j <= n + i - 1)
            {
                printf("* ");
            }
            else if (j <= n)
            {
                printf("%d ", j);
            }
            else
            {
                printf("%d ", 2 * n - j);
            }
        }
        x--;
        printf("\n");
    }
    return 0;
}
Pattern 97

//         *
//       # * #
//     * # * # *
//   # * # * # * #
// * # * # * # * # *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    int x = n;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < 2 * n; j++)
        {
            if (j >= x && j < n + i && j % 2 == 1)
            {
                printf("* ");
            }
            else if (j >= x && j < n + i && j % 2 == 0)
            {
                printf("# ");
            }
            else
            {
                printf("  "); // Adjust spacing for better alignment
            }
        }
        x--;
        printf("\n");
    }

    return 0;
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

#include <stdio.h>

int main()
{
    int p_height = 5;

    int p_space = p_height - 1;
    int i, j, k;
    int n;
    int x = 1;

    for (i = 1; i < p_height; i++)
    {
        for (n = 1; n <= p_height; n++)
        {
            printf(" ");
        }

        for (k = p_space; k >= i; k--)
            printf(" ");

        for (j = 1; j <= i; j++)
            printf("* ");

        printf("\n");
    }

    for (i = 0; i < p_height; i++)
    {
        for (j = p_space; j > i; j--)
        {
            printf(" ");
        }
        for (k = 0; k <= i; k++)
        {
            printf("* ");
        }

        for (n = (p_height + p_height - 2); n >= x; n--)
        {
            printf(" ");
        }
        for (k = 0; k <= i; k++)
        {
            printf("* ");
        }

        x += 2;
        printf("\n");
    }
    return 0;
}
 
Pattern 99

//     *
//    * *
//   *   *
//  *     *
// *********

#include <stdio.h>

int main()
{
    int n = 5;
    int px = n;
    int py = n;

    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < n * 2; j++)
        {
            if (j == px || j == py || i == n)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        px--;
        py++;
        printf("\n");
    }
    return 0;
}
 
Pattern 100

// *
// **
// * *
// *  *
// * *
// **
// *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    int x = 1;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= x; j++)
        {
            if (j == 1 || j == x)
                printf("*");
            else
                printf(" ");
        }
        printf("\n");

        if (i <= n / 2)
            x++;
        else
            x--;
    }
    return 0;
}
 
Pattern 101

//    *
//   **
//  * *
// *  *
//  * *
//   **
//    *

#include <stdio.h>

int main()
{
    int n = 7;
    int x = n / 2 + 1;

    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n / 2 + 1; j++)
        {
            if (j == x || j == n / 2 + 1)
                printf("*");
            else
                printf(" ");
        }
        if (i <= n / 2)
            x--;
        else
            x++;
        printf("\n");
    }
    return 0;
}
 
Pattern 102

// *********
//  *     *
//   *   *
//    * *
//     *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;
    int x = 1, y = 2 * n - 1;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < 2 * n; j++)
        {
            if (j == x || j == y || i == 1)
                printf("*");
            else
                printf(" ");
        }
        printf("\n");
        x++;
        y--;
    }
    return 0;
}
 
Pattern 103

// *           *
// * *       * *
// *   *   *   *
// *     *     *
// *   *   *   *
// * *       * *
// *           *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;
    int x = 1;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == x || j == n - x + 1 || (j == 1 && i != 1 && i != n) || (j == n && i != 1 && i != n))
            {
                printf("* ");
            }
            else
            {
                printf("  "); // Adjust spacing for better appearance
            }
        }
        if (i <= n / 2)
            x++;
        else
            x--;
        printf("\n");
    }
    return 0;
}
 
Pattern 104

// *     *     *
//   *   *   *
//     * * *
// * * * * * * *
//     * * *
//   *   *   *
// *     *     *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == i || j == n - i + 1 || i == n / 2 + 1 || j == n / 2 + 1)
            {
                printf("* ");
            }
            else
            {
                printf("  "); 
            }
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 105

// *     * * * *
// *     *
// *     *
// * * * * * * *
//       *     *
//       *     *
// * * * *     *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == n / 2 + 1 || j == n / 2 + 1 ||
                (i == 1 && j >= n / 2 + 1) ||
                (i == n && j <= n / 2) ||
                (j == 1 && i <= n / 2) ||
                (j == n && i >= n / 2 + 1))
            {
                printf("* ");
            }
            else
            {
                printf("  "); // Adjust spacing for better appearance
            }
        }
        printf("\n");
    }
    return 0;
}

Pattern 106

// *   *   *   *
// *   *   *   *
// * * * * * * *
// *           *
// *           *
// *           *
// * * * * * * *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if ((i == n / 2 || i == n) ||
                ((j == 1 || j == n) && i >= n / 2) ||
                (j % 2 == 1 && i <= n / 2))
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
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

#include <stdio.h>

int main()
{
    int n = 9;
    int x = 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if ((j <= x || j >= n - x + 1) && j % 2 == 1)
            {
                printf("* ");
            }
            else if ((j >= x && j <= n - x + 1) && i % 2 == 1)
            {
                printf("* ");
            }
            else
            {
                printf("  "); // Adjust spacing for better appearance
            }
        }
        printf("\n");
        if (i <= n / 2)
            x++;
        else
            x--;
    }
    return 0;
}

 
Pattern 108

//   *   *   *
// *   *   *   *
//   *   *   *
// *   *   *   *
//   *   *   *
// *   *   *   *
//   *   *   *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if ((i + j) % 2 == 1)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 109

// *     *     *
// **   ***   **
// *** ***** ***
// *************
// *************
// *************
// *************

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    int x = n;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < 2 * n; j++)
        {
            if ((j >= x && j <= 2 * n - x) || j <= n - x + 1 || j >= n + x - 1)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        x--;
        printf("\n");
    }
    return 0;
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

#include <stdio.h>

int main()
{
    int i, j;
    int n = 9;
    int c1 = (n - 1) / 2;
    int c2 = 3 * n / 2 - 1;

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            if (i + j == c1 || i - j == c1 || j - i == c1 || i + j == c2 || i == c1 || j == c1)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
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

#include <stdio.h>

int main()
{
    int i, j;
    int n = 9;
    int c1 = (n - 1) / 2;
    int c2 = 3 * n / 2 - 1;

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            if (i + j <= c1 || i - j >= c1 || j - i >= c1 || i + j >= c2)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
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

#include <stdio.h>

int main()
{
    int i, j;
    int n = 8;
    int c1 = (n - 1) / 2;
    int c2 = 3 * n / 2 - 1;

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            if (i + j <= c1 || i - j >= c1 || j - i >= c1 || i + j >= c2)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 113

// *     *
// **   **
// *** ***
// *******
// *** ***
// **   **
// *     *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;
    int px = 1;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j <= px || j >= n - px + 1)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }

        if (i <= n / 2)
            px++;
        else
            px--;
        printf("\n");
    }
    return 0;
}
Pattern 114

//     *****
//    *****
//   *****
//  *****
// *****

#include <stdio.h>

int main()
{
    int z = 1;
    int n = 5;
    int i, j, k;

    for (i = 0; i < n; i++)
    {
        for (j = n - 1; j > i; j--)
        {
            printf(" ");
        }
        for (k = 0; k < n; k++)
        {
            printf("*");
        }
        z++;
        printf("\n");
    }
    return 0;
}
 
Pattern 115

// **
// **
// ****
// ****
// ******
// ******

#include <stdio.h>

int main()
{
    int i, j, c, k;

    for (i = 1; i <= 6; i++)
    {
        k = (i % 2 != 0) ? i + 1 : i;

        for (j = 0; j < k; j++)
        {
            printf("*");
        }
        printf("\n");
    }

    return 0;
}

 
Pattern 116

//     **
//     **
//   ****
//   ****
// ******
// ******

#include <stdio.h>

int main()
{
    int i, j, k, g;

    for (i = 1; i <= 6; i++)
    {
        k = (i % 2 != 0) ? i + 1 : i;

        for (g = 6; g > k; g--)
        {
            printf(" ");
        }

        for (j = 0; j < k; j++)
        {
            printf("*");
        }

        printf("\n");
    }

    return 0;
}

 
Pattern 117

// ******
// ******
// ****
// ****
// **
// **

#include <stdio.h>

int main()
{
    int n = 6;
    int i, j, c, k;

    for (i = n; i > 0; i--)
    {
        k = (i % 2 != 0) ? i + 1 : i;

        for (j = 0; j < k; j++)
        {
            printf("*");
        }
        printf("\n");
    }

    return 0;
}

 
Pattern 118

// ******
// ******
//   ****
//   ****
//     **
//     **

#include <stdio.h>

int main()
{
    int n = 6;
    int i, j, c, k, x;

    for (i = n; i > 0; i--)
    {
        k = (i % 2 != 0) ? i + 1 : i;

        for (x = k; x < n; x++)
        {
            printf(" ");
        }
        for (j = 0; j < k; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 119

// *
// *
// **
// **
// ***
// ***

#include <stdio.h>

int main()
{
    int n = 3;
    int i, j, c;
    
    for(i = 1; i<= n; i++)
    {
        for( c= n- 1; c>0; c--)
        {
            for(j = 0; j<i; j++)
            {
                printf("*");
            }
            printf("\n");
        }
    }
    return 0;
}
 
Pattern 120

//   *
//   *
//  **
//  **
// ***
// ***

#include <stdio.h>

int main()
{
    int i, j, x, y;

    for (i = 1; i <= 3; i++)
    {
        for (x = 2; x > 0; x--)
        {
            for (y = 2; y >= i; y--)
            {
                printf(" ");
            }
            for (j = 0; j < i; j++)
            {
                printf("*");
            }
            printf("\n");
        }
    }
    return 0;
}
 
Pattern 121

// ***
// ***
// **
// **
// *
// *

#include <stdio.h>

int main()
{
    int i, j, x, y;

    for (i = 3; i >= 1; i--)
    {
        for (x = 2; x > 0; x--)
        {
            for (j = 0; j < i; j++)
            {
                printf("*");
            }
            printf("\n");
        }
    }
    return 0;
}
 
Pattern 122

// ***
// ***
//  **
//  **
//   *
//   *

#include <stdio.h>

int main()
{
    int i, j, x, y;

    for (i = 3; i >= 1; i--)
    {
        for (x = 2; x > 0; x--)
        {
            for (y = 2; y >= i; y--)
            {
                printf(" ");
            }
            for (j = 0; j < i; j++)
            {
                printf("*");
            }
            printf("\n");
        }
    }
    return 0;
}
 
Pattern 123

//   *
//   *
//  ***
//  ***
// *****
// *****

#include <stdio.h>

int main()
{
    int n = 3;
    int i, j, x, y, z = 1;

    for (i = 0; i < n; i++)
    {
        for (j = 2; j > 0; j--)
        {
            for (x = n - 1; x > i; x--)
            {
                printf(" ");
            }
            for (y = 0; y < z; y++)
            {
                printf("*");
            }
            printf("\n");
        }
        z += 2;
    }
    return 0;
}
 
Pattern 124

//       **
//       **
//     *    *
//     *    *
//   *        *
//   *        *
// *            *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    int x = n;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= 2 * n; j++)
        {
            if (j == x || j == 2 * n - x + 1)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
        if (i % 2 == 0)
            x -= 2;
    }
    return 0;
}
 
Pattern 125

// *****
//   ***
//     *
//   ***
// *****

#include <stdio.h>

int main()
{
    int n = 3;
    int s1 = n * 2 - 1, s2 = 3;

    int i, j, k;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < i; j++)
        {
            printf("  ");
        }
        for (k = 1; k <= s1; k++)
        {
            printf("*");
        }
        s1 -= 2;
        printf("\n");
    }

    for (i = 1; i <= n - 1; i++)
    {
        for (j = n - 2; j >= i; j--)
        {
            printf("  ");
        }
        for (k = 1; k <= s2; k++)
        {
            printf("*");
        }
        s2 += 2;
        printf("\n");
    }
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

#include <stdio.h>

int main()
{
    int i, j, k, z, x;

    for (i = 1; i <= 9; i++)
    {
        switch (i)
        {
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
        for (j = 1; j <= z; j++)
        {
            printf(" ");
        }
        for (k = 1; k <= x; k++)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
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

#include <stdio.h>

int main()
{
    int n = 6;
    int i, j;

    // Top part of the heart
    for (i = n / 2; i <= n; i += 2)
    {
        for (j = 1; j < n - i; j += 2)
        {
            printf(" ");
        }
        for (j = 1; j <= i; j++)
        {
            printf("*");
        }
        for (j = 1; j <= n - i; j++)
        {
            printf(" ");
        }
        for (j = 1; j <= i; j++)
        {
            printf("*");
        }
        printf("\n");
    }

    // Bottom part of the heart
    for (i = n; i >= 1; i--)
    {
        for (j = i; j < n; j++)
        {
            printf(" ");
        }
        for (j = 1; j <= (i * 2) - 1; j++)
        {
            printf("*");
        }
        printf("\n");
    }

    return 0;
}

 
Pattern 128

//  ** **
// *  *  *
// *     *
//  *   *
//   * *
//    *

#include <stdio.h>

int main()
{
    int row, col;
    for (row = 0; row < 6; row++)
    {
        for (col = 0; col < 7; col++)
        {
            if ((row == 0 && col % 3 != 0) || (row == 1 && col % 3 == 0) || (row - col == 2) || (row + col == 8))
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
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

int main()
{
    int i, j, k;
    int height = 3, width = 4;

    int space = width * 5;
    int r = 1;
    int m = 1;

    for (r = 1; r < height; r++)
    {
        for (i = m; i <= width; i++)
        {
            for (j = space; j >= i; j--)
            {
                printf(" ");
            }
            for (k = 1; k <= i; k++)
            {
                printf("* ");
            }
            printf("\n");
        }
        m += 2;
        width += 2;
    }
    for (i = 1; i <= 4; i++)
    {
        for (j = space - 3; j >= 1; j--)
        {
            printf(" ");
        }
        for (k = 1; k <= 4; k++)
        {
            printf("* ");
        }
        printf("\n");
    }
}
 
Pattern 130

// * * * * *
// *     * *
// *   *   *
// * *     *
// * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || i == n || j == 1 || j == n || i + j == n + 1)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 131

//   * *
// *   *
//     *
//     *
// * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int mid = n / 2 + 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == mid || i == n || (i + j == mid && j <= mid))
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 132

// * * * * *
//         *
// * * * * *
// *
// * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int mid = n / 2 + 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || i == n || i == mid || (j == 1 && i >= mid) || (j == n && i < mid))
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 133

// * * * * *
//         *
// * * * * *
//         *
// * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int mid = n / 2 + 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || i == n || i == mid || j == n)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 134

// *       *
// *       *
// * * * * *
//         *
//         *

#include <stdio.h>

int main()
{
    int n = 5;
    int mid = n / 2 + 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == mid || (j == 1 && i <= mid) || j == n)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 135

// * * * * *
// *
// * * * * *
//         *
// * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int mid = n / 2 + 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || i == n || i == mid || (j == 1 && i <= mid) || (j == n && i > mid))
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 136

// * * * * *
// *
// * * * * *
// *       *
// * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int mid = n / 2 + 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || i == n || i == mid || j == 1 || (j == n && i > mid))
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 137

// * * * *
//       *
//     *
//   *
// *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n - 1; j++)
        {
            if (i == 1 || i + j == n + 1)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 138

// * * * * *
// *       *
// * * * * *
// *       *
// * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int mid = n / 2 + 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || i == n || i == mid || j == 1 || j == n)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 139

// * * * * *
// *       *
// * * * * *
//         *
// * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int mid = n / 2 + 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || i == n || i == mid || (j == 1 && i <= mid) || j == n)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 140

//     *
//    * *
//   *****
//  *     *
// *       *

#include <stdio.h>

int main()
{
    int n = 5;
    int x = n;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= 2 * n; j++)
        {
            if (j == x || j == n + i - 1)
            {
                printf("*");
            }
            else if (j >= x && j <= n + i - 1 && i == n / 2 + 1)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
        x--;
    }
    return 0;
}
 
Pattern 141

// ****
// *   *
// *****
// *   *
// ****

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == 1 || (i == 1 || i == n || i == n / 2 + 1) && j <= n - 1)
            {
                printf("*");
            }
            else if (i != 1 && i != n && j == n)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 142

// *****
// *
// *
// *
// *****

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || i == n || j == 1)
            {
                printf("*");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 143

// ****
// *   *
// *   *
// *   *
// ****

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == 1 || (i == 1 || i == n) && j <= n - 1)
            {
                printf("*");
            }
            else if (i != 1 && i != n && j == n)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 144

// *****
// *
// *****
// *
// *****

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == 1 || i == 1 || i == n || i == n / 2 + 1)
            {
                printf("*");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 145

// *****
// *
// *****
// *
// *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == 1 || i == 1 || i == n / 2 + 1)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 146

// *****
// *
// * ***
// *   *
// *****

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == 1 || i == 1 || i == n || (i > n / 2 && j == n) || (i == (n / 2 + 1) && j > n / 2))
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 147

// *       *
// *       *
// * * * * *
// *       *
// *       *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == 1 || j == n || i == n / 2 + 1)
                printf("* ");
            else
                printf("  ");
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 148

// * * * * *
//     *
//     *
//     *
// * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || i == n || j == n / 2 + 1)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 149

// * * * * *
//     *
//     *
//     *
// * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || (i == n && j <= n / 2 + 1) || j == n / 2 + 1)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 150

// *   *
// * *
// *
// * *
// *   *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;
    int x = n / 2 + 1;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n / 2 + 1; j++)
        {
            if (j == 1 || j == x)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        if (i <= n / 2)
            x--;
        else
            x++;
        printf("\n");
    }
    return 0;
}
 
Pattern 151

// *
// *
// *
// *
// * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == 1 || (i == n && j <= (n / 2) + 1))
            {
                printf("* ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 152

// *       *
// * *   * *
// *   *   *
// *       *
// *       *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;
    int x = 1;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == 1 || j == n || (j == x || j == n - x + 1) && i <= n / 2 + 1)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        x++;
        printf("\n");
    }
    return 0;
}

 
Pattern 153

// *       *
// * *     *
// *   *   *
// *     * *
// *       *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == 1 || j == n || i == j)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 154

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == 1 || j == n || i == 1 || i == n)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 155

// * * *
// *   *
// * * *
// *
// *

#include <stdio.h>

int main()
{
    int n = 5;
    int x = (n / 2) + 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if ((i == 1 && j <= x) || j == 1 || (j == x && i <= x) || (i == x && j <= x))
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 156

// * * * * * *
// *         *
// *         *
// *         *
// *       * *
// * * * * * *
//             *

#include <stdio.h>

int main()
{
    int n = 7;
    int x = n - n / 2 + 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if ((i == 1 || i == x + 1) && j <= x + 1 || (j == 1 || j == x + 1) && i <= x + 1 || (j == i && i >= x))
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 157

// * * *
// *   *
// * * *
// * *
// *   *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;
    int x = 1;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n / 2 + 1; j++)
        {
            if (j == 1 || i == 1 || i == n / 2 + 1 || (i <= n / 2 && j == n / 2 + 1) || j == x)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        if (i > n / 2)
            x++;
        printf("\n");
    }
    return 0;
}
 
Pattern 158

// * * * * *
// *
// * * * * *
//         *
// * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || i == n || i == n / 2 + 1 || (j == 1 && i <= n / 2 + 1) || (j == n && i > n / 2 + 1))
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
}
 
Pattern 159

// * * * * *
//     *
//     *
//     *
//     *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || j == n / 2 + 1)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}

 
Pattern 160

// *       *
// *       *
// *       *
// *       *
// * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == 1 || j == n || i == n)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 161
// *       *
//  *     * 
//   *   *  
//    * *   
//     *    

#include <stdio.h>

int main()
{
    int n =5;
    int i, j;
    
    int x = 1;
    for(i = 1; i <= n; i++)
    {
        for(j = 1; j < 2 * n; j++)
        {
            if(j == x || j == 2 * n - x)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
        x++;
    }
    return 0;
}
 
Pattern 162

// *   *   *
// *  * *  *
// * *   * *
// **     **
// *       *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    int x = n;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= 2 * n - 1; j++)
        {
            if (j == 1 || j == 2 * n - 1 || j == x || j == 2 * n - x)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
        x--;
    }
    return 0;
}

 
Pattern 163

// *       *
//   *   *
//     *
//   *   *
// *       *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == i || j == n - i + 1)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 164

// *       *
//   *   *
//     *
//     *
//     *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if ((j == i || j == n - i + 1) && i <= n / 2 + 1 || (j == n / 2 + 1 && i > n / 2))
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
 
Pattern 165

// * * * * *
//       *
//     *
//   *
// * * * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || i == n || j == n - i + 1)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}


