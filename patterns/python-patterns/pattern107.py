# Pattern 107: ...

# * * * * * * * * *
# *               *
# *   * * * * *   *
# *   *       *   *
# *   *   *   *   *
# *   *       *   *
# *   * * * * *   *
# *               *
# * * * * * * * * *

n = 9
x = 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (j <= x or j >= n - x + 1) and j % 2 == 1:
            print("* ", end="")
        elif (j >= x and j <= n - x + 1) and i % 2 == 1:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
    if i <= n // 2:
        x += 1
    else:
        x -= 1
