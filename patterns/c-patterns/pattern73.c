// Pattern 73: ...

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
