# Pattern 152: ...

# *       *
# * *   * *
# *   *   *
# *       *
# *       *

n = 5
x = 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or j == n or (j == x or j == n - x + 1) and i <= (n // 2) + 1:
            print("* ", end="")
        else:
            print("  ", end="")
    x += 1
    print()
