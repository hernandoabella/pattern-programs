// Pattern 91: ...

// * * * * *
// * * * *
// * * *
// * *
// *
// * *
// * * *
// * * * *
// * * * * *



#include <stdio.h>
#include <math.h>
int main()
{
    int size = 4;
    int i, j;

    for (i = size; i >= -size; i--)
    {
        for (j = 0; j <= abs(i); j++)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}