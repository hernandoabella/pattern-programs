// Pattern 13: ...

// 1****
// 12***
// 123**
// 1234*
// 12345

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
                printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}