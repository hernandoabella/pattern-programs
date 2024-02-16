# Pattern 96: ...

# 1 2 3 4 * 4 3 2 1
# 1 2 3 * * * 3 2 1
# 1 2 * * * * * 2 1
# 1 * * * * * * * 1
# * * * * * * * * *

n = 5

x = n

for i in range(1, n + 1):
    for j in range(1, 2 * n):
        if j >= x and j <= n + i - 1:
            print("* ", end="")
        elif j <= n:
            print(j, end=" ")
        else:
            print(2 * n - j, end=" ")
    x -= 1
    print()
