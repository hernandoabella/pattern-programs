// Pattern 115: ...

// **
// **
// ****
// ****
// ******
// ******

#include <stdio.h>

int main()
{
    int i, j, c, k;

    for (i = 1; i <= 6; i++)
    {
        k = (i % 2 != 0) ? i + 1 : i;

        for (j = 0; j < k; j++)
        {
            printf("*");
        }
        printf("\n");
    }

    return 0;
}
