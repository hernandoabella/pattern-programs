// Pattern 121: ...

// ***
// ***
// **
// **
// *
// *

#include <stdio.h>

int main()
{
    int i, j, x, y;

    for (i = 3; i >= 1; i--)
    {
        for (x = 2; x > 0; x--)
        {
            for (j = 0; j < i; j++)
            {
                printf("*");
            }
            printf("\n");
        }
    }
    return 0;
}