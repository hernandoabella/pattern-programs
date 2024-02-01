// Pattern 143: ...

// ****
// *   *
// *   *
// *   *
// ****

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == 1 || (i == 1 || i == n) && j <= n - 1)
            {
                printf("*");
            }
            else if (i != 1 && i != n && j == n)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}
