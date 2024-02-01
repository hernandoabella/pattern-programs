// Pattern 39: ...

// 1
// 2*
// 3*3
// 4*4*
// 5*5*5

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= i; j++)
        {
            if (j % 2 == 0)
                printf("*");
            else
                printf("%d", i);
        }
        printf("\n");
    }
    return 0;
}
