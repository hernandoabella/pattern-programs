// Pattern 79: ...

// *
//  *
//   *
//    *
//   *
//  *
// *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    int x = 1;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= x; j++)
        {
            if (j == x)
                printf("* ");
            else
                printf(" ");
        }
        printf("\n");
        if (i <= n / 2)
            x++;
        else
            x--;
    }
    return 0;
}