// Pattern 20: ...

// A****
// BB***
// CCC**
// DDDD*
// EEEEE

#include <stdio.h>
int main()
{
    int i, j;
    int n = 5;
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
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