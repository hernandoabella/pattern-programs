# Pattern 74: ...

# * * * * * * *
# *         *
# *       *
# *     *
# *   *
# * *
# *

n = 7
for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if j == n - i + 1 or j == n or i == n:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
