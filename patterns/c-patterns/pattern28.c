// Pattern 28: ...

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