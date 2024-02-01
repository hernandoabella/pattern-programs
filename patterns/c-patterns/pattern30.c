// Pattern 30: ...

// * A* B*
// C* D* E
// * F* G*
// H* I* J
// * K* L*

#include <stdio.h>
int main()
{
    int n = 5;
    int i, j;

    char x = 'A';

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if ((i + j) % 2 == 1)
            {
                printf("%c", x++);
            }
            else
            {
                printf("* ");
            }
        }
        printf("\n");
    }
    return 0;
}