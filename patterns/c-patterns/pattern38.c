// Pattern 38: ...

// 1
// 1*
// 1*3
// 1*3*
// 1*3*5

int main()
{
    int i, j;
    int n = 5;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= i; j++)
        {
            if (j % 2 == 0)
                printf("*");
            else
                printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}