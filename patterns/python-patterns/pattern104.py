# Pattern 104: ...

# *     *     *
#   *   *   *
#     * * *
# * * * * * * *
#     * * *
#   *   *   *
# *     *     *

n = 7

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == i or j == n - i + 1 or i == n // 2 + 1 or j == n // 2 + 1:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
