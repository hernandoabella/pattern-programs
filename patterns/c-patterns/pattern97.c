// Pattern 97: ...

//         *
//       # * #
//     * # * # *
//   # * # * # * #
// * # * # * # * # *

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    int x = n;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < 2 * n; j++)
        {
            if (j >= x && j < n + i && j % 2 == 1)
            {
                printf("* ");
            }
            else if (j >= x && j < n + i && j % 2 == 0)
            {
                printf("# ");
            }
            else
            {
                printf("  "); // Adjust spacing for better alignment
            }
        }
        x--;
        printf("\n");
    }

    return 0;
}
