// Pattern 24: ...

// ****A
// ***BB
// **CCC
// *DDDD
// EEEEE

#include <stdio.h>
int main()
{
    int i, j;
    int n = 4;
    for (i = 0; i <= n; i++)
    {
        for (j = n; j >= 0; j--)
        {
            if (j > i)
                printf("*");
            else
                printf("%c", i + 65);
        }
        printf("\n");
    }
    return 0;
}