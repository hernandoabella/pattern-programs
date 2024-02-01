// Pattern 98: ...

//          *
//         * *
//        * * *
//       * * * *
//     *         *
//    * *       * *
//   * * *     * * *
//  * * * *   * * * *
// * * * * * * * * * *

#include <stdio.h>

int main()
{
    int p_height = 5;

    int p_space = p_height - 1;
    int i, j, k;
    int n;
    int x = 1;

    for (i = 1; i < p_height; i++)
    {
        for (n = 1; n <= p_height; n++)
        {
            printf(" ");
        }

        for (k = p_space; k >= i; k--)
            printf(" ");

        for (j = 1; j <= i; j++)
            printf("* ");

        printf("\n");
    }

    for (i = 0; i < p_height; i++)
    {
        for (j = p_space; j > i; j--)
        {
            printf(" ");
        }
        for (k = 0; k <= i; k++)
        {
            printf("* ");
        }

        for (n = (p_height + p_height - 2); n >= x; n--)
        {
            printf(" ");
        }
        for (k = 0; k <= i; k++)
        {
            printf("* ");
        }

        x += 2;
        printf("\n");
    }
    return 0;
}