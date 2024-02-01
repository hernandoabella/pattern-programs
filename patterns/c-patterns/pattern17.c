// Pattern 17: ...

// ****1
// ***21
// **321
// *4321
// 54321

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;
    for (i = 1; i <= n; i++)
    {
        for (j = n; j >= 1; j--)
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