// Pattern 1: Square Pattern
// *****
// *****
// *****
// *****
// *****

#include <stdio.h>

int main()
{
    int i, j;

    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= 5; j++)
        {
            printf("*"); // put any character
        }
        printf("\n");
    }
    return 0;
}