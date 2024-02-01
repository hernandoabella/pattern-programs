// Pattern 93: ...

// *       *
// **     **
// ***   ***
// **** ****
// *********

#include <stdio.h>

int main()
{
    int n = 5;

    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < n * 2; j++)
        {
            if (j <= i || j >= n * 2 - i)
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