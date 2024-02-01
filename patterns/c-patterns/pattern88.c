// Pattern 88: ...

// 1
// 2* 2
// 3* 3* 3
// 4* 4* 4* 4
// 3* 3* 3
// 2* 2
// 1

#include <stdio.h>

int main()
{
    int n = 7;
    int x = 1;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < 2 * x; j++)
        {
            if (i <= n / 2 + 1 && j % 2 == 1)
            {
                printf("%d", i);
            }
            else if (i > n / 2 + 1 && j % 2 == 1)
            {
                printf("%d", n - i + 1);
            }
            else
            {
                printf("* ");
            }
        }
        if (i <= n / 2)
            x++;
        else
            x--;
        printf("\n");
    }
    return 0;
}
