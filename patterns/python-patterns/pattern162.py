# Pattern 162: ...

# *   *   *
# *  * *  *
# * *   * *
# **     **
# *       *

n = 5
x = n

for i in range(1, n + 1):
    for j in range(1, 2 * n):
        if j == 1 or j == 2 * n - 1 or j == x or j == 2 * n - x:
            print("*", end="")
        else:
            print(" ", end="")
    print()
    x -= 1
