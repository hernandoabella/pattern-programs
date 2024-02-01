// Pattern 41: ...

// #*#*#
// #*#*
// #*#
// #*
// #

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = n; i >= 1; i--)
    {
        for (j = 1; j <= i; j++)
        {
            if (j % 2 == 0)
                printf("*");
            else
                printf("#");
        }
        printf("\n");
    }
    return 0;
}