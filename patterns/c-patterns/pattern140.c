// Pattern 140: ...

//     *
//    * *
//   *****
//  *     *
// *       *

#include <stdio.h>

int main()
{
    int n = 5;
    int x = n;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= 2 * n; j++)
        {
            if (j == x || j == n + i - 1)
            {
                printf("*");
            }
            else if (j >= x && j <= n + i - 1 && i == n / 2 + 1)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
        x--;
    }
    return 0;
}