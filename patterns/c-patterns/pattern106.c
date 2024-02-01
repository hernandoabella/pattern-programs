// Pattern 106: ...

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