// Pattern 119: ...

// *
// *
// **
// **
// ***
// ***


#include <stdio.h>

int main()
{
    int n = 3;
    int i, j, c;
    
    for(i = 1; i<= n; i++)
    {
        for( c= n- 1; c>0; c--)
        {
            for(j = 0; j<i; j++)
            {
                printf("*");
            }
            printf("\n");
        }
    }
    return 0;
}