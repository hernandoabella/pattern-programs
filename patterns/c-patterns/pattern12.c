// Pattern 12: ...

// 1****
// 22***
// 333**
// 4444*
// 55555

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;
    for (i = 1; i <= n; i++)
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