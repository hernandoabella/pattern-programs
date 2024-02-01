// Pattern 32: ...

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