// Pattern 85: ...

// *
// **
// ***
// *
// **
// ***
// *
// **
// ***

int main()
{
    int n = 3;
    int i, j, k;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            for (k = 1; k <= j; k++)
            {
                printf("*");
            }
            printf("\n");
        }
    }

    return 0;
}
