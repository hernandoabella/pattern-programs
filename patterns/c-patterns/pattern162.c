// *   *   *
// *  * *  *
// * *   * *
// **     **
// *       *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    int x = n;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= 2 * n - 1; j++)
        {
            if (j == 1 || j == 2 * n - 1 || j == x || j == 2 * n - x)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
        x--;
    }
    return 0;
}
