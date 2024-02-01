// Pattern 83: ...

//     *
//    - -
//   -   -
//  -     -
// -       -
// -       -
//  -     -
//   -   -
//    - -
//     *

#include <stdio.h>

int main()
{
    int n = 10;
    int px = n / 2;
    int py = n / 2;

    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n - 1; j++)
        {
            if ((i == 1 || i == n) && j == n / 2)
            {
                printf("*");
            }
            else if (j == px || j == py)
            {
                printf("-");
            }
            else
            {
                printf(" ");
            }
        }
        if (i == n / 2)
        {
            int t = px;
            px = py;
            py = t;
        }
        else
        {
            px--;
            py++;
        }
        printf("\n");
    }
    return 0;
}
