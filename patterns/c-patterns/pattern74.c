// Pattern 74: ...

// * * * * * * *
// *         *
// *       *
// *     *
// *   *
// * *
// *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    for (i = n; i >= 1; i--)
    {
        for (j = n; j >= 1; j--)
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
