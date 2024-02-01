// Pattern 42: ...

// 55555
// ****
// 333
// **
// 1

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
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