
// * * *
// *   *
// * * *
// * *
// *   *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;
    int x = 1;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n / 2 + 1; j++)
        {
            if (j == 1 || i == 1 || i == n / 2 + 1 || (i <= n / 2 && j == n / 2 + 1) || j == x)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        if (i > n / 2)
            x++;
        printf("\n");
    }
    return 0;
}