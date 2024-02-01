// Pattern 29: ...

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