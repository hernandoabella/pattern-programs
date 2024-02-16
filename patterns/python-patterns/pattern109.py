# Pattern 109: ...

# *     *     *
# **   ***   **
# *** ***** ***
# *************
# *************
# *************
# *************

n = 7

x = n
for i in range(1, n + 1):
    for j in range(1, 2 * n):
        if (j >= x and j <= 2 * n - x) or j <= n - x + 1 or j >= n + x - 1:
            print("*", end="")
        else:
            print(" ", end="")
    x -= 1
    print()
