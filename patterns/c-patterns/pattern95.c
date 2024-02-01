// Pattern 95: ...

//     *        *
//    ***      ***
//   *****    *****
//  *******  *******
// ******************

#include <stdio.h>

int main()
{
    int min_stars = 1;

    int p_height = 5;
    int p_space = p_height - 1;
    int i, j, k;
    int n;
    int x = 1;
    for (i = 0; i < p_height; i++)
    {
        for (j = p_space; j > i; j--)
        {
            printf(" ");
        }
        for (k = 0; k < min_stars; k++)
        {
            printf("*");
        }
        for (n = (p_height + p_height - 2); n >= x; n--)
        {
            printf(" ");
        }
        for (k = 0; k < min_stars; k++)
        {
            printf("*");
        }

        min_stars += 2;
        x += 2;
        printf("\n");
    }
    return 0;
}