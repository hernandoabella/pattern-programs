// Pattern 36: ...

// 1
// **
// 333
// ****
// 55555

#include <stdio.h>

int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= i; j++)
        {
            if (i % 2 == 0)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}