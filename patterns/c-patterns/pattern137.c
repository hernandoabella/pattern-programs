// Pattern 137: ...

// * * * *
//       *
//     *
//   *
// *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n - 1; j++)
        {
            if (i == 1 || i + j == n + 1)
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