// Pattern 14: ...

// 55555
// 4444*
// 333**
// 22***
// 1****

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;
    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= n; j++)
        {
            if (j > i)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}