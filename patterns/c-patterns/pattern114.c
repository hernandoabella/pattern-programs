// Pattern 114: ...

//     *****
//    *****
//   *****
//  *****
// *****

#include <stdio.h>

int main()
{
    int z = 1;
    int n = 5;
    int i, j, k;

    for (i = 0; i < n; i++)
    {
        for (j = n - 1; j > i; j--)
        {
            printf(" ");
        }
        for (k = 0; k < n; k++)
        {
            printf("*");
        }
        z++;
        printf("\n");
    }
    return 0;
}