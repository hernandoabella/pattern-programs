# Pattern 124: ...

#       **
#       **
#     *    *
#     *    *
#   *        *
#   *        *
# *            *

n = 7
x = n
for i in range(1, n + 1):
    for j in range(1, 2 * n + 1):
        if j == x or j == 2 * n - x + 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()
    if i % 2 == 0:
        x -= 2
