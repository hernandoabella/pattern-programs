// Pattern 34: ...

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