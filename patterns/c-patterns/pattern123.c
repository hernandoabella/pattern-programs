// Pattern 123: ...

//   *
//   *
//  ***
//  ***
// *****
// *****

#include <stdio.h>

int main()
{
    int n = 3;
    int i, j, x, y, z = 1;

    for (i = 0; i < n; i++)
    {
        for (j = 2; j > 0; j--)
        {
            for (x = n - 1; x > i; x--)
            {
                printf(" ");
            }
            for (y = 0; y < z; y++)
            {
                printf("*");
            }
            printf("\n");
        }
        z += 2;
    }
    return 0;
}