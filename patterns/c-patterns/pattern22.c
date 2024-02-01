// Pattern 22: ...

// EEEEE
// DDDD*
// CCC**
// BB***
// A****

#include <stdio.h>
int main()
{
    int i, j;
    int n = 4;
    for (i = n; i >= 0; i--)
    {
        for (j = 0; j <= n; j++)
        {
            if (j > i)
                printf("*");
            else
                printf("%c", i + 65);
        }
        printf("\n");
    }
    return 0;
}