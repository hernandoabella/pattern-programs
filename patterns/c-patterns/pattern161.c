// *       *
//  *     * 
//   *   *  
//    * *   
//     *    

#include <stdio.h>

int main()
{
    int n =5;
    int i, j;
    
    int x = 1;
    for(i = 1; i <= n; i++)
    {
        for(j = 1; j < 2 * n; j++)
        {
            if(j == x || j == 2 * n - x)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
        x++;
    }
    return 0;
}