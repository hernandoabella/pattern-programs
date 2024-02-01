// Pattern 15: ...

// 12345
// 1234*
// 123**
// 12***
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
                printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}