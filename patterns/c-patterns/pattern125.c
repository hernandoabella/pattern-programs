// Pattern 125: ...

// *****
//   ***
//     *
//   ***
// *****

#include <stdio.h>

int main()
{
    int n = 3;
    int s1 = n * 2 - 1, s2 = 3;

    int i, j, k;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < i; j++)
        {
            printf("  ");
        }
        for (k = 1; k <= s1; k++)
        {
            printf("*");
        }
        s1 -= 2;
        printf("\n");
    }

    for (i = 1; i <= n - 1; i++)
    {
        for (j = n - 2; j >= i; j--)
        {
            printf("  ");
        }
        for (k = 1; k <= s2; k++)
        {
            printf("*");
        }
        s2 += 2;
        printf("\n");
    }
}