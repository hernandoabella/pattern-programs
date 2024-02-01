// Pattern 102: ...

// *********
//  *     *
//   *   *
//    * *
//     *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;
    int x = 1, y = 2 * n - 1;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < 2 * n; j++)
        {
            if (j == x || j == y || i == 1)
                printf("*");
            else
                printf(" ");
        }
        printf("\n");
        x++;
        y--;
    }
    return 0;
}