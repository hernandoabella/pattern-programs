// Pattern 27: ...

// EDCBA
// *DCBA
// **CBA
// ***BA
// ****A

#include <stdio.h>
int main()
{
    int i, j;
    int n = 4;
    for (i = n; i >= 0; i--)
    {
        for (j = n; j >= 0; j--)
        {
            if (j > i)
                printf("*");
            else
                printf("%c", j + 65);
        }
        printf("\n");
    }
    return 0;
}