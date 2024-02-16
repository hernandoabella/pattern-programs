# Pattern 106: ...

# *   *   *   *
# *   *   *   *
# * * * * * * *
# *           *
# *           *
# *           *
# * * * * * * *

n = 7

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (i == n // 2 or i == n) or \
           ((j == 1 or j == n) and i >= n // 2) or \
           (j % 2 == 1 and i <= n // 2):
            print("* ", end="")
        else:
            print("  ", end="")
    print()
