// Pattern 76: ...

// * * * * *
//   *     *
//     *   *
//       * *
//         *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == n - i + 1 || j == n || i == n)
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
