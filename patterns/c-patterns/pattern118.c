// Pattern 118: ...

// ******
// ******
//   ****
//   ****
//     **
//     **

#include <stdio.h>

int main()
{
    int n = 6;
    int i, j, c, k, x;

    for (i = n; i > 0; i--)
    {
        k = (i % 2 != 0) ? i + 1 : i;

        for (x = k; x < n; x++)
        {
            printf(" ");
        }
        for (j = 0; j < k; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}