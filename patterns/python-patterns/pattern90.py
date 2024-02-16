# Pattern 90: ...

# *           *
# * *       * *
# * * *   * * *
# * * * * * * *
# * * *   * * *
# * *       * *
# *           *

n = 7
x = 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j <= x or j >= n - x + 1:
            print("* ", end="")
        else:
            print("  ", end="")
    if i <= n // 2:
        x += 1
    else:
        x -= 1
    print()
