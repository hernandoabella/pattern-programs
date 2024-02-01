// Pattern 116: ...

//     **
//     **
//   ****
//   ****
// ******
// ******

#include <stdio.h>

int main()
{
    int i, j, k, g;

    for (i = 1; i <= 6; i++)
    {
        k = (i % 2 != 0) ? i + 1 : i;

        for (g = 6; g > k; g--)
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
