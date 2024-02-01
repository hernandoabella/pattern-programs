// Pattern 113: ...

// *     *
// **   **
// *** ***
// *******
// *** ***
// **   **
// *     *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;
    int px = 1;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j <= px || j >= n - px + 1)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }

        if (i <= n / 2)
            px++;
        else
            px--;
        printf("\n");
    }
    return 0;
}