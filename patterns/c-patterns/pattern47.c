// Pattern 47: ...

//     #
//    *#
//   #*#
//  *#*#
// #*#*#

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = n; j >= 1; j--)
        {
            if (i >= j)
            {
                if (j % 2 == 0)
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