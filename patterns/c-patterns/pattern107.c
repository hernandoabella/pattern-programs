// Pattern 107: ...

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
