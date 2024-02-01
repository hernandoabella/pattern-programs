// Pattern 96: ...

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
