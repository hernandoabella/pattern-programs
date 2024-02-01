// Pattern 25: ...

// ****A
// ***BA
// **CBA
// *DCBA
// EDCBA


#include <stdio.h>
int main()
{
    int i, j;
    int n=4;
    for(i=0; i<=n; i++)
    {
        for(j=n; j>=0; j--)
        {
            if(j>i)
            printf("*");
            else
            printf("%c", j+65);
        }
        printf("\n");
    }
    return 0;
}