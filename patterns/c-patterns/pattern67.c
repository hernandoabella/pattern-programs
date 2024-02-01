// Pattern 67: ...

// *****5
// ****4
// ***3
// **2
// *1
// 0

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;
    for (i = n; i >= 0; i--)
    {
        for (j = 0; j <= i; j++)
        {
            if (i > j)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}