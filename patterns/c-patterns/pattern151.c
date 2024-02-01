// Pattern 151: ...

// *
// *
// *
// *
// * * *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (j == 1 || (i == n && j <= (n / 2) + 1))
            {
                printf("* ");
            }
        }
        printf("\n");
    }
    return 0;
}