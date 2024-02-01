// Pattern 101: ...

//    *
//   **
//  * *
// *  *
//  * *
//   **
//    *

#include <stdio.h>

int main()
{
    int n = 7;
    int x = n / 2 + 1;

    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n / 2 + 1; j++)
        {
            if (j == x || j == n / 2 + 1)
                printf("*");
            else
                printf(" ");
        }
        if (i <= n / 2)
            x--;
        else
            x++;
        printf("\n");
    }
    return 0;
}