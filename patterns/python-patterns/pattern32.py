# Pattern 32: ...

# * 0 0 0 * 0 0 0 *
# 0 * 0 0 * 0 0 * 0
# 0 0 * 0 * 0 * 0 0
# 0 0 0 * * * 0 0 0
# 0 0 0 0 * 0 0 0 0

n = 5

for i in range(1, n + 1):
    for j in range(1, 2 * n):
        if j == i or j == 2 * n - i or j == n:
            print("* ", end="")
        else:
            print("0 ", end="")
    print()
