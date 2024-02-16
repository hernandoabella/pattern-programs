# Pattern 103: ...

# *           *
# * *       * *
# *   *   *   *
# *     *     *
# *   *   *   *
# * *       * *
# *           *

n = 7
x = 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == x or j == n - x + 1 or (j == 1 and i != 1 and i != n) or (j == n and i != 1 and i != n):
            print("* ", end="")
        else:
            print("  ", end="")
    if i <= n // 2:
        x += 1
    else:
        x -= 1
    print()
