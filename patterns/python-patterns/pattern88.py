# Pattern 88: ...

# 1
# 2* 2
# 3* 3* 3
# 4* 4* 4* 4
# 3* 3* 3
# 2* 2
# 1

n = 7
x = 1

for i in range(1, n + 1):
    for j in range(1, 2 * x):
        if i <= n // 2 + 1 and j % 2 == 1:
            print(i, end="")
        elif i > n // 2 + 1 and j % 2 == 1:
            print(n - i + 1, end="")
        else:
            print("*", end=" ")
    if i <= n // 2:
        x += 1
    else:
        x -= 1
    print()