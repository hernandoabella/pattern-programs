// Pattern 103: ...

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
