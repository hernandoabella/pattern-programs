# Pattern 164: ...

# *       *
#   *   *
#     *
#     *
#     *

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (j == i or j == n - i + 1) and i <= n // 2 + 1 or (j == n // 2 + 1 and i > n // 2):
            print("* ", end="")
        else:
            print("  ", end="")
    print()
