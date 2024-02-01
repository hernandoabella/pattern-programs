
// *       *
// * *   * *
// *   *   *
// *       *
// *       *

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
            if (j == 1 || j == n || (j == x || j == n - x + 1) && i <= n / 2 + 1)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        x++;
        printf("\n");
    }
    return 0;
}
