// Pattern 108: ...

//   *   *   *
// *   *   *   *
//   *   *   *
// *   *   *   *
//   *   *   *
// *   *   *   *
//   *   *   *

#include <stdio.h>

int main()
{
    int n = 7;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if ((i + j) % 2 == 1)
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}
