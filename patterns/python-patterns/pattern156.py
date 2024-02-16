# Pattern 156: ...

# * * * * * *
# *         *
# *         *
# *         *
# *       * *
# * * * * * *
#             *

n = 7
x = n - n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (i == 1 or i == x + 1) and j <= x + 1 or (j == 1 or j == x + 1) and i <= x + 1 or (j == i and i >= x):
            print("* ", end="")
        else:
            print("  ", end="")
    print()