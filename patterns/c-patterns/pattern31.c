// Pattern 31: ...

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