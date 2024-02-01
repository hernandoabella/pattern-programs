// Pattern 7: Inverted-Triangle

// * * * * *
//  * * * *
//   * * *
//    * *
//     *

#include <stdio.h>

int main()
{
    int i, j, k;

    int p_height = 5;

    for (i = p_height; i >= 1; i--)
    {
        for (k = p_height - 1; k >= i; k--)
        {
            printf(" ");
        }
        for (j = i; j >= 1; j--)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}