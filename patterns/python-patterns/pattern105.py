# Pattern 105: ...

# *     * * * *
# *     *
# *     *
# * * * * * * *
#       *     *
#       *     *
# * * * *     *

n = 7

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == n // 2 + 1 or j == n // 2 + 1 or \
           (i == 1 and j >= n // 2 + 1) or \
           (i == n and j <= n // 2) or \
           (j == 1 and i <= n // 2) or \
           (j == n and i >= n // 2 + 1):
            print("* ", end="")
        else:
            print("  ", end="")
    print()
