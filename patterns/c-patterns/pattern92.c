// Pattern 92: ...

// * * * *
//   * * *
//     * *
//       *
//     * *
//   * * *
// * * * *

#include <stdio.h>
#include <math.h>
int main()
{
    int n = 7;
    int x = 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n / 2 + 1; j++)
        {
            if (j >= x)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
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
