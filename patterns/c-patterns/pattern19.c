// Pattern 19: ...

// 54321
// *4321
// **321
// ***21
// ****1

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;
    for (i = n; i >= 1; i--)
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