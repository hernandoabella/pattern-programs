// Pattern 46: ...

//     #
//    **
//   ###
//  ****
// #####


#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;
    
    for(i = n; i>=1; i--)
    {
        for(j=1; j<=n;j++)
        {
            if(i<=j)
            {
                if(i%2==0)
                printf("*");
                else
                printf("#");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}